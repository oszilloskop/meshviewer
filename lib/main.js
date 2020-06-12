define(['moment', 'utils/router', 'leaflet', 'gui', 'helper', 'utils/language'],
  function (moment, Router, L, GUI, helper, Language) {
    'use strict';

    return function () {
      function handleData(data) {
        var timestamp;
        var nodes = [];
        var links = [];
        var nodeDict = {};

        for (var i = 0; i < data.length; ++i) {
          nodes = nodes.concat(data[i].nodes);
          timestamp = data[i].timestamp;
          links = links.concat(data[i].links);
        }

        var allowedDomains = config.allowedDomains;
        if (typeof allowedDomains !== 'undefined') {
          var ii = nodes.length;
          while (ii--) {
            /* nicht anzuzeigende Nodes identifizieren */
            if (allowedDomains.indexOf(nodes[ii].domain) === -1) {
              var iii = links.length;
              while (iii--) {
                /* Auch die Links von/zu den zu entfernenden Nodes löschen */
                if ( (nodes[ii].node_id === links[iii].source) || (nodes[ii].node_id === links[iii].target) ) {
                  links.splice(iii, 1);
                }
              }
              nodes.splice(ii, 1);
            }
          }
        }

        nodes.forEach(function (node) {
          node.firstseen = moment.utc(node.firstseen).local();
          node.lastseen = moment.utc(node.lastseen).local();
        });

        var age = moment().subtract(config.maxAge, 'days');

        var online = nodes.filter(function (d) {
          return d.is_online;
        });
        var offline = nodes.filter(function (d) {
          return !d.is_online;
        });

        var newnodes = helper.limit('firstseen', age, helper.sortByKey('firstseen', online));
        var lostnodes = helper.limit('lastseen', age, helper.sortByKey('lastseen', offline));

        nodes.forEach(function (d) {
          d.neighbours = [];
          nodeDict[d.node_id] = d;
        });

        links.forEach(function (d) {
          d.source = nodeDict[d.source];
          d.target = nodeDict[d.target];

          d.id = [d.source.node_id, d.target.node_id].join('-');
          d.source.neighbours.push({ node: d.target, link: d });
          d.target.neighbours.push({ node: d.source, link: d });

          try {
            d.latlngs = [];
            d.latlngs.push(L.latLng(d.source.location.latitude, d.source.location.longitude));
            d.latlngs.push(L.latLng(d.target.location.latitude, d.target.location.longitude));

            d.distance = d.latlngs[0].distanceTo(d.latlngs[1]);
          } catch (e) {
            // ignore exception
          }
        });

        return {
          now: moment(),
          timestamp: moment.utc(timestamp).local(),
          nodes: {
            all: nodes,
            online: online,
            offline: offline,
            new: newnodes,
            lost: lostnodes
          },
          links: links,
          nodeDict: nodeDict
        };
      }

      var language = new Language();
      window.router = new Router(language);

      config.dataPath.forEach(function (d, i) {
        config.dataPath[i] += 'meshviewer.json';
      });

      language.init(router);

      function update() {
        return Promise.all(config.dataPath.map(helper.getJSON))
          .then(handleData);
      }

      update()
        .then(function (d) {
          return new Promise(function (resolve, reject) {
            var count = 0;
            (function waitForLanguage() {
              if (Object.keys(_.phrases).length > 0) {
                resolve(d);
              } else if (count > 500) {
                reject(new Error('translation not loaded after 10 seconds'));
              } else {
                setTimeout(waitForLanguage.bind(this), 20);
              }
              count++;
            })();
          });
        })
        .then(function (d) {
          var gui = new GUI(language);
          gui.setData(d);
          router.setData(d);
          router.resolve();

          window.setInterval(function () {
            update().then(function (n) {
              gui.setData(n);
              router.setData(n);
            });
          }, 60000);
        })
        .catch(function (e) {
          document.querySelector('.loader').innerHTML += e.message
            + '<br /><br /><button onclick="location.reload(true)" class="btn text" aria-label="Try to reload">Try to reload</button><br /> or report to your community';
          console.warn(e);
        });
    };
  });
