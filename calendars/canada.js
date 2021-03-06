var _ = require('lodash'),
    moment = require('moment'), 
    range = require('moment-range'),
    Path = require('path'),
    Utils = require( Path.join( __dirname, '../lib/utils' )),
    Dates = require( Path.join( __dirname, '../lib/dates' )),
    LiturgicalColors = require( Path.join( __dirname, '../data/liturgicalColors' )),
    Titles = require( Path.join( __dirname, '../data/titles' )),
    Types = require( Path.join( __dirname, '../data/types' )).types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "saintAndreBessetteReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRaymondOfPenyafortPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 8 }),
        "data": {}
      },
      {
        "key": "saintMargueriteBourgeoysVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 19 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintKateriTekakwithaVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 17 }),
        "data": {}
      },
      {
        "key": "blessedMarieAnneBlondinVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 18 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGoodCounsel",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 26 }),
        "data": {}
      },
      {
        "key": "saintMarieOfTheIncarnationReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 30 }),
        "data": {}
      },
      {
        "key": "blessedMarieLeonieParadisVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {}
      },
      {
        "key": "saintFrancoisDeLavalBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 6 }),
        "data": {}
      },
      {
        "key": "blessedCaTherineOfSaintAugustineVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 8 }),
        "data": {}
      },
      {
        "key": "saintEugeneDeMazenodBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
        "data": {}
      },
      {
        "key": "blessedLouisZephirinMoreauBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {}
      },
      {
        "key": "saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedFredericJanssoonePriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 5 }),
        "data": {}
      },
      {
        "key": "blessedAndreGrassetPriestAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 2 }),
        "data": {}
      },
      {
        "key": "blessedDinaBelangerVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 4 }),
        "data": {}
      },
      {
        "key": "blessedEmilieTavernierGamelinReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {}
      },
      {
        "key": "saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrsSecondaryPatronsOfCanada",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMarieRoseDurocherVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 6 }),
        "data": {}
      },
      {
        "key": "saintMargueriteDYouvilleReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintHedwigReligiousOrSaintMargaretMaryAlacoqueVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];

    // Get localized celebration names
    return _.map( dates, function( date ) {
      date.name = Utils.localize({
        key: 'national.' + date.key 
      });
      return date;
    });
  }
};
