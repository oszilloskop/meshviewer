module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    "nodeInfos": [
      {
        "name": "",
        "href": "https://grafana-lab.freifunk.fail/d/000000003/node-details-for-map?var-id={NODE_ID}&from=now-7d&to=now",
        "image": "https://grafana-lab.freifunk.fail/render/dashboard-solo/db/node-details-for-map?panelId=7&var-id={NODE_ID}&from=now-7d&to=now&width=500&height=160&theme=light&_t={TIME}",
        "title": "Knoten {NODE_ID} ({NODE_NAME})"
      },
      {
        "name": "",
        "href": "https://grafana-lab.freifunk.fail/d/000000003/node-details-for-map?var-id={NODE_ID}&from=now-7d&to=now",
        "image": "https://grafana-lab.freifunk.fail/render/dashboard-solo/db/node-details-for-map?panelId=1&var-id={NODE_ID}&from=now-7d&to=now&width=500&height=190&theme=light&_t={TIME}",
        "title": "Knoten {NODE_ID} ({NODE_NAME})"
      },
      {
        "name": "",
        "href": "https://grafana-lab.freifunk.fail/d/000000003/node-details-for-map?var-id={NODE_ID}&from=now-7d&to=now",
        "image": "https://grafana-lab.freifunk.fail/render/dashboard-solo/db/node-details-for-map?panelId=5&var-id={NODE_ID}&from=now-7d&to=now&width=500&height=160&theme=light&_t={TIME}",
        "title": "Knoten {NODE_ID} ({NODE_NAME})"
      },
      {
        "name": "",
        "href": "https://grafana-lab.freifunk.fail/d/000000003/node-details-for-map?var-id={NODE_ID}&from=now-7d&to=now",
        "image": "https://grafana-lab.freifunk.fail/render/dashboard-solo/db/node-details-for-map?panelId=2&var-id={NODE_ID}&from=now-7d&to=now&width=500&height=160&theme=light&_t={TIME}",
        "title": "Knoten {NODE_ID} ({NODE_NAME})"
      },
      {
        "name": "",
        "href": "https://grafana-lab.freifunk.fail/d/000000003/node-details-for-map?var-id={NODE_ID}&from=now-7d&to=now",
        "image": "https://grafana-lab.freifunk.fail/render/dashboard-solo/db/node-details-for-map?panelId=4&var-id={NODE_ID}&from=now-7d&to=now&width=500&height=160&theme=light&_t={TIME}",
        "title": "Knoten {NODE_ID} ({NODE_NAME})"
      }
    ],
    "globalInfos": [
      {
        "name": "Wochenstatistik",
        "href": "https://grafana-lab.freifunk.fail/dashboard/db/deck?from=now-7d&to=now",
        "image": "https://grafana-lab.freifunk.fail/render/dashboard-solo/db/deck?&panelId=22&from=now-7d&to=now&width=500&height=300&theme=light&_t={TIME}",
        "title": "Bild der Wochenstatistik"
      }
    ],
    // Array of data provider are supported
    'dataPath': [
       "https://yanic.batman15.ffffm.net/"
//    'https://yanic.ffm.freifunk.net/',
//    'http://localhost/data/',
//    'https://test.blauerbecher.de/',
//    '/data/',
    ],
    'siteName': 'Freifunk Frankfurt',
    "maxAge": 21,
    "nodeZoom": 19,
    'mapLayers': [
      {
        "name": "OpenStreetMap",
//        "url": "/tiles-cache/{z}/{x}/{y}.png",
          "url": "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
//        "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
//        "url": "https://tiles.ffm.freifunk.net/{z}/{x}/{y}.png",
        "config": {
          "type": "osm",
          "maxZoom": 19,
          "attribution": "Map data (c) <a href\"http://openstreetmap.org\">OpenStreetMap</a> contributor"
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        50.392168269,
        8.39790396
      ],
      [
        49.975101152,
        9.155653418
      ]
    ],
'siteNames': [
         {site:"ffffm_60549",name:"60549 Frankfurt am Main"},
         {site:"ffffm_35519",name:"35519 Rockenberg"},
         {site:"ffffm_63549",name:"63549 Ronneburg"},
         {site:"ffffm_65817",name:"65817 Eppstein"},
         {site:"ffffm_61169",name:"61169 Friedberg (Hessen)"},
         {site:"ffffm_61231",name:"61231 Bad Nauheim"},
         {site:"ffffm_63150",name:"63150 Heusenstamm"},
         {site:"ffffm_61348",name:"61348 Bad Homburg v.d. Höhe"},
         {site:"legacy",name:"Single Domain Legacy BATMAN"},
         {site:"ffffm_63069",name:"63069 Offenbach am Main"},
         {site:"ffffm_63667",name:"63667 Nidda"},
         {site:"ffffm_63636",name:"63636 Brachttal"},
         {site:"ffffm_63263",name:"63263 Neu-Isenburg"},
         {site:"ffffm_63512",name:"63512 Hainburg"},
         {site:"ffffm_63452",name:"63452 Hanau"},
         {site:"ffffm_63691",name:"63691 Ranstadt"},
         {site:"ffffm_65936",name:"65936 Frankfurt am Main"},
         {site:"ffffm_60433",name:"60433 Frankfurt am Main"},
         {site:"ffffm_61440",name:"61440 Oberursel (Taunus)"},
         {site:"ffffm_61138",name:"61138 Niederdorfelden"},
         {site:"ffffm_60594",name:"60594 Frankfurt am Main"},
         {site:"ffffm_63543",name:"63543 Neuberg"},
         {site:"ffffm_65779",name:"65779 Kelkheim"},
         {site:"ffffm_60313",name:"60313 Frankfurt am Main"},
         {site:"ffffm_63165",name:"63165 Mühlheim am Main"},
         {site:"ffffm_61209",name:"61209 Echzell"},
         {site:"ffffm_60437",name:"60437 Frankfurt am Main"},
         {site:"ffffm_singledomain",name:"Single Domain"},
         {site:"ffffm_65934",name:"65934 Frankfurt am Main"},
         {site:"ffffm_63619",name:"63619 Bad Orb"},
         {site:"ffffm_60316",name:"60316 Frankfurt am Main"},
         {site:"ffffm_63607",name:"63607 Wächtersbach"},
         {site:"ffffm_63683",name:"63683 Ortenberg"},
         {site:"ffffm_65933",name:"65933 Frankfurt am Main"},
         {site:"ffffm_63075",name:"63075 Offenbach am Main"},
         {site:"ffffm_60598",name:"60598 Frankfurt am Main"},
         {site:"ffffm_35510",name:"35510 Butzbach"},
         {site:"ffffm_63584",name:"63584 Gründau"},
         {site:"ffffm-legacy",name:"Legacy"},
         {site:"ffffm_60431",name:"60431 Frankfurt am Main"},
         {site:"ffffm_61191",name:"61191 Rosbach v.d. Höhe"},
         {site:"ffffm_63486",name:"63486 Bruchköbel"},
         {site:"ffffm_63594",name:"63594 Hasselroth"},
         {site:"ffffm_65451",name:"65451 Kelsterbach"},
         {site:"ffffm_63637",name:"63637 Jossgrund"},
         {site:"ffffm_65830",name:"65830 Kriftel"},
         {site:"ffffm_61197",name:"61197 Florstadt"},
         {site:"ffffm_63454",name:"63454 Hanau"},
         {site:"ffffm_63654",name:"63654 Büdingen"},
         {site:"ffffm_60311",name:"60311 Frankfurt am Main"},
         {site:"ffffm_61381",name:"61381 Friedrichsdorf"},
         {site:"ffffm_63628",name:"63628 Bad Soden-Salmünster"},
         {site:"ffffm_60327",name:"60327 Frankfurt am Main"},
         {site:"ffffm_65931",name:"65931 Frankfurt am Main"},
         {site:"ffffm_61239",name:"61239 Ober-Mörlen"},
         {site:"ffffm_63517",name:"63517 Rodenbach"},
         {site:"ffffm_60329",name:"60329 Frankfurt am Main"},
         {site:"ffffm_61279",name:"61279 Grävenwiesbach"},
         {site:"ffffm_61137",name:"61137 Schöneck"},
         {site:"ffffm_60325",name:"60325 Frankfurt am Main"},
         {site:"ffffm_61184",name:"61184 Karben"},
         {site:"ffffm_63505",name:"63505 Langenselbold"},
         {site:"ffffm_65760",name:"65760 Eschborn"},
         {site:"ffffm_63633",name:"63633 Birstein"},
         {site:"ffffm_61267",name:"61267 Neu-Anspach"},
         {site:"ffffm_61203",name:"61203 Reichelsheim (Wetterau)"},
         {site:"ffffm_60489",name:"60489 Frankfurt am Main"},
         {site:"ffffm_63067",name:"63067 Offenbach am Main"},
         {site:"ffffm_63599",name:"63599 Biebergemünd"},
         {site:"ffffm_60529",name:"60529 Frankfurt am Main"},
         {site:"ffffm_65835",name:"65835 Liederbach am Taunus"},
         {site:"ffffm_60599",name:"60599 Frankfurt am Main"},
         {site:"ffffm_60320",name:"60320 Frankfurt am Main"},
         {site:"ffffm_63579",name:"63579 Freigericht"},
         {site:"ffffm_63450",name:"63450 Hanau"},
         {site:"ffffm_61273",name:"61273 Wehrheim"},
         {site:"ffffm_63073",name:"63073 Offenbach am Main"},
         {site:"ffffm_61200",name:"61200 Wölfersheim"},
         {site:"ffffm_63457",name:"63457 Hanau"},
         {site:"ffffm_60438",name:"60438 Frankfurt am Main"},
         {site:"ffffm_60486",name:"60486 Frankfurt am Main"},
         {site:"ffffm_60326",name:"60326 Frankfurt am Main"},
         {site:"ffffm_61194",name:"61194 Niddatal"},
         {site:"ffffm_63639",name:"63639 Flörsbachtal"},
         {site:"ffffm_63526",name:"63526 Erlensee"},
         {site:"ffffm_63695",name:"63695 Glauburg"},
         {site:"ffffm_default",name:"Default"},
         {site:"ffffm_63694",name:"63694 Limeshain"},
         {site:"ffffm_61389",name:"61389 Schmitten"},
         {site:"ffffm_63546",name:"63546 Hammersbach"},
         {site:"ffffm_65929",name:"65929 Frankfurt am Main"},
         {site:"ffffm_61250",name:"61250 Usingen"},
         {site:"ffffm_65719",name:"65719 Hofheim am Taunus"},
         {site:"ffffm_63477",name:"63477 Maintal"},
         {site:"ffffm_61130",name:"61130 Nidderau"},
         {site:"ffffm_60385",name:"60385 Frankfurt am Main"},
         {site:"ffffm_60528",name:"60528 Frankfurt am Main"},
         {site:"ffffm_60314",name:"60314 Frankfurt am Main"},
         {site:"ffffm_61206",name:"61206 Wöllstadt"},
         {site:"ffffm_60488",name:"60488 Frankfurt am Main"},
         {site:"ffffm_60322",name:"60322 Frankfurt am Main"},
         {site:"ffffm_63065",name:"63065 Offenbach am Main"},
         {site:"ffffm_60318",name:"60318 Frankfurt am Main"},
         {site:"ffffm_61350",name:"61350 Bad Homburg v.d. Höhe"},
         {site:"ffffm_65795",name:"65795 Hattersheim"},
         {site:"ffffm_60439",name:"60439 Frankfurt am Main"},
         {site:"ffffm_63674",name:"63674 Altenstadt"},
         {site:"ffffm_60386",name:"60386 Frankfurt am Main"},
         {site:"ffffm_61118",name:"61118 Bad Vilbel"},
         {site:"ffffm_60487",name:"60487 Frankfurt am Main"},
         {site:"ffffm_63699",name:"63699 Kefenrod"},
         {site:"ffffm_63071",name:"63071 Offenbach am Main"},
         {site:"legacybat_11s",name:"Single Domain Legacy BATMAN"},
         {site:"ffffm_60596",name:"60596 Frankfurt am Main"},
         {site:"ffffm_60388",name:"60388 Frankfurt am Main"},
         {site:"ffffm_61352",name:"61352 Bad Homburg v.d. Höhe"},
         {site:"ffffm_61449",name:"61449 Steinbach (Taunus)"},
         {site:"ffffm_61476",name:"61476 Kronberg im Taunus"},
         {site:"ffffm_65843",name:"65843 Sulzbach (Taunus)"},
         {site:"ffffm_60435",name:"60435 Frankfurt am Main"},
         {site:"ffffm_61276",name:"61276 Weilrod"},
         {site:"ffffm_63456",name:"63456 Hanau"},
         {site:"ffffm_event",name:"Event"},
         {site:"ffffm_65812",name:"65812 Bad Soden am Taunus"},
         {site:"ffffm_63179",name:"63179 Obertshausen"},
         {site:"ffffm_60323",name:"60323 Frankfurt am Main"},
         {site:"ffffm_63589",name:"63589 Linsengericht"},
         {site:"ffffm_63538",name:"63538 Großkrotzenburg"},
         {site:"ffffm_60389",name:"60389 Frankfurt am Main"},
         {site:"ffffm_61462",name:"61462 Königstein im Taunus"},
         {site:"ffffm_63571",name:"63571 Gelnhausen"},
         {site:"ffffm_65824",name:"65824 Schwalbach am Taunus"},
         {site:"ffffm_61479",name:"61479 Glashütten"} ],
'domainNames': [
         {site:"legacybat_11s",name:"Legacy BATMAN (Single Domain)"},
         {domain:"ffffm_60549",name:"60549 Frankfurt am Main"},
         {domain:"ffffm_35519",name:"35519 Rockenberg"},
         {domain:"ffffm_63549",name:"63549 Ronneburg"},
         {domain:"ffffm_65817",name:"65817 Eppstein"},
         {domain:"ffffm_61169",name:"61169 Friedberg (Hessen)"},
         {domain:"ffffm_61231",name:"61231 Bad Nauheim"},
         {domain:"ffffm_63150",name:"63150 Heusenstamm"},
         {domain:"ffffm_61348",name:"61348 Bad Homburg v.d. Höhe"},
         {domain:"legacy",name:"Single Domain Legacy BATMAN"},
         {domain:"ffffm_63069",name:"63069 Offenbach am Main"},
         {domain:"ffffm_63667",name:"63667 Nidda"},
         {domain:"ffffm_63636",name:"63636 Brachttal"},
         {domain:"ffffm_63263",name:"63263 Neu-Isenburg"},
         {domain:"ffffm_63512",name:"63512 Hainburg"},
         {domain:"ffffm_63452",name:"63452 Hanau"},
         {domain:"ffffm_63691",name:"63691 Ranstadt"},
         {domain:"ffffm_65936",name:"65936 Frankfurt am Main"},
         {domain:"ffffm_60433",name:"60433 Frankfurt am Main"},
         {domain:"ffffm_61440",name:"61440 Oberursel (Taunus)"},
         {domain:"ffffm_61138",name:"61138 Niederdorfelden"},
         {domain:"ffffm_60594",name:"60594 Frankfurt am Main"},
         {domain:"ffffm_63543",name:"63543 Neuberg"},
         {domain:"ffffm_65779",name:"65779 Kelkheim"},
         {domain:"ffffm_60313",name:"60313 Frankfurt am Main"},
         {domain:"ffffm_63165",name:"63165 Mühlheim am Main"},
         {domain:"ffffm_61209",name:"61209 Echzell"},
         {domain:"ffffm_60437",name:"60437 Frankfurt am Main"},
         {domain:"ffffm_singledomain",name:"Single Domain"},
         {domain:"ffffm_65934",name:"65934 Frankfurt am Main"},
         {domain:"ffffm_63619",name:"63619 Bad Orb"},
         {domain:"ffffm_60316",name:"60316 Frankfurt am Main"},
         {domain:"ffffm_63607",name:"63607 Wächtersbach"},
         {domain:"ffffm_63683",name:"63683 Ortenberg"},
         {domain:"ffffm_65933",name:"65933 Frankfurt am Main"},
         {domain:"ffffm_63075",name:"63075 Offenbach am Main"},
         {domain:"ffffm_60598",name:"60598 Frankfurt am Main"},
         {domain:"ffffm_35510",name:"35510 Butzbach"},
         {domain:"ffffm_63584",name:"63584 Gründau"},
         {domain:"ffffm-legacy",name:"Legacy"},
         {domain:"ffffm_60431",name:"60431 Frankfurt am Main"},
         {domain:"ffffm_61191",name:"61191 Rosbach v.d. Höhe"},
         {domain:"ffffm_63486",name:"63486 Bruchköbel"},
         {domain:"ffffm_63594",name:"63594 Hasselroth"},
         {domain:"ffffm_65451",name:"65451 Kelsterbach"},
         {domain:"ffffm_63637",name:"63637 Jossgrund"},
         {domain:"ffffm_65830",name:"65830 Kriftel"},
         {domain:"ffffm_61197",name:"61197 Florstadt"},
         {domain:"ffffm_63454",name:"63454 Hanau"},
         {domain:"ffffm_63654",name:"63654 Büdingen"},
         {domain:"ffffm_60311",name:"60311 Frankfurt am Main"},
         {domain:"ffffm_61381",name:"61381 Friedrichsdorf"},
         {domain:"ffffm_63628",name:"63628 Bad Soden-Salmünster"},
         {domain:"ffffm_60327",name:"60327 Frankfurt am Main"},
         {domain:"ffffm_65931",name:"65931 Frankfurt am Main"},
         {domain:"ffffm_61239",name:"61239 Ober-Mörlen"},
         {domain:"ffffm_63517",name:"63517 Rodenbach"},
         {domain:"ffffm_60329",name:"60329 Frankfurt am Main"},
         {domain:"ffffm_61279",name:"61279 Grävenwiesbach"},
         {domain:"ffffm_61137",name:"61137 Schöneck"},
         {domain:"ffffm_60325",name:"60325 Frankfurt am Main"},
         {domain:"ffffm_61184",name:"61184 Karben"},
         {domain:"ffffm_63505",name:"63505 Langenselbold"},
         {domain:"ffffm_65760",name:"65760 Eschborn"},
         {domain:"ffffm_63633",name:"63633 Birstein"},
         {domain:"ffffm_61267",name:"61267 Neu-Anspach"},
         {domain:"ffffm_61203",name:"61203 Reichelsheim (Wetterau)"},
         {domain:"ffffm_60489",name:"60489 Frankfurt am Main"},
         {domain:"ffffm_63067",name:"63067 Offenbach am Main"},
         {domain:"ffffm_63599",name:"63599 Biebergemünd"},
         {domain:"ffffm_60529",name:"60529 Frankfurt am Main"},
         {domain:"ffffm_65835",name:"65835 Liederbach am Taunus"},
         {domain:"ffffm_60599",name:"60599 Frankfurt am Main"},
         {domain:"ffffm_60320",name:"60320 Frankfurt am Main"},
         {domain:"ffffm_63579",name:"63579 Freigericht"},
         {domain:"ffffm_63450",name:"63450 Hanau"},
         {domain:"ffffm_61273",name:"61273 Wehrheim"},
         {domain:"ffffm_63073",name:"63073 Offenbach am Main"},
         {domain:"ffffm_61200",name:"61200 Wölfersheim"},
         {domain:"ffffm_63457",name:"63457 Hanau"},
         {domain:"ffffm_60438",name:"60438 Frankfurt am Main"},
         {domain:"ffffm_60486",name:"60486 Frankfurt am Main"},
         {domain:"ffffm_60326",name:"60326 Frankfurt am Main"},
         {domain:"ffffm_61194",name:"61194 Niddatal"},
         {domain:"ffffm_63639",name:"63639 Flörsbachtal"},
         {domain:"ffffm_63526",name:"63526 Erlensee"},
         {domain:"ffffm_63695",name:"63695 Glauburg"},
         {domain:"ffffm_default",name:"Default"},
         {domain:"ffffm_63694",name:"63694 Limeshain"},
         {domain:"ffffm_61389",name:"61389 Schmitten"},
         {domain:"ffffm_63546",name:"63546 Hammersbach"},
         {domain:"ffffm_65929",name:"65929 Frankfurt am Main"},
         {domain:"ffffm_61250",name:"61250 Usingen"},
         {domain:"ffffm_65719",name:"65719 Hofheim am Taunus"},
         {domain:"ffffm_63477",name:"63477 Maintal"},
         {domain:"ffffm_61130",name:"61130 Nidderau"},
         {domain:"ffffm_60385",name:"60385 Frankfurt am Main"},
         {domain:"ffffm_60528",name:"60528 Frankfurt am Main"},
         {domain:"ffffm_60314",name:"60314 Frankfurt am Main"},
         {domain:"ffffm_61206",name:"61206 Wöllstadt"},
         {domain:"ffffm_60488",name:"60488 Frankfurt am Main"},
         {domain:"ffffm_60322",name:"60322 Frankfurt am Main"},
         {domain:"ffffm_63065",name:"63065 Offenbach am Main"},
         {domain:"ffffm_60318",name:"60318 Frankfurt am Main"},
         {domain:"ffffm_61350",name:"61350 Bad Homburg v.d. Höhe"},
         {domain:"ffffm_65795",name:"65795 Hattersheim"},
         {domain:"ffffm_60439",name:"60439 Frankfurt am Main"},
         {domain:"ffffm_63674",name:"63674 Altenstadt"},
         {domain:"ffffm_60386",name:"60386 Frankfurt am Main"},
         {domain:"ffffm_61118",name:"61118 Bad Vilbel"},
         {domain:"ffffm_60487",name:"60487 Frankfurt am Main"},
         {domain:"ffffm_63699",name:"63699 Kefenrod"},
         {domain:"ffffm_63071",name:"63071 Offenbach am Main"},
         {domain:"legacybat_11s",name:"Single Domain Legacy BATMAN"},
         {domain:"ffffm_60596",name:"60596 Frankfurt am Main"},
         {domain:"ffffm_60388",name:"60388 Frankfurt am Main"},
         {domain:"ffffm_61352",name:"61352 Bad Homburg v.d. Höhe"},
         {domain:"ffffm_61449",name:"61449 Steinbach (Taunus)"},
         {domain:"ffffm_61476",name:"61476 Kronberg im Taunus"},
         {domain:"ffffm_65843",name:"65843 Sulzbach (Taunus)"},
         {domain:"ffffm_60435",name:"60435 Frankfurt am Main"},
         {domain:"ffffm_61276",name:"61276 Weilrod"},
         {domain:"ffffm_63456",name:"63456 Hanau"},
         {domain:"ffffm_event",name:"Event"},
         {domain:"ffffm_65812",name:"65812 Bad Soden am Taunus"},
         {domain:"ffffm_63179",name:"63179 Obertshausen"},
         {domain:"ffffm_60323",name:"60323 Frankfurt am Main"},
         {domain:"ffffm_63589",name:"63589 Linsengericht"},
         {domain:"ffffm_63538",name:"63538 Großkrotzenburg"},
         {domain:"ffffm_60389",name:"60389 Frankfurt am Main"},
         {domain:"ffffm_61462",name:"61462 Königstein im Taunus"},
         {domain:"ffffm_63571",name:"63571 Gelnhausen"},
         {domain:"ffffm_65824",name:"65824 Schwalbach am Taunus"},
         {domain:"ffffm_61479",name:"61479 Glashütten"} ],
    'linkList': [
      {
        'title': 'Frankfurter-Webseite',
        'href': 'https://ffm.freifunk.net/mitmachen/',
        'target': '_blank'
      },
      {
        'title': 'Grafana',
        'href': 'https://grafana-lab.freifunk.fail/d/000000001/deck?orgId=1&refresh=5m&from=now-30d&to=now',
        'target': '_blank'
      },
    ]
  };
};
