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
        "key": "saintJohnNeumannBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 5 }),
        "data": {}
      },
      {
        "key": "saintValentineOfRaetiaBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 7 }),
        "data": {}
      },
      {
        "key": "saintSeverinusOfNoricumMonk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 8 }),
        "data": {}
      },
      {
        "key": "saintMeinradMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 21 }),
        "data": {}
      },
      {
        "key": "blessedHenrySusoPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 23 }),
        "data": {}
      },
      {
        "key": "saintRabanusMaurusBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 4 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintMatthiasApostle",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintWalburgaAbbess",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 25 }),
        "data": {}
      },
      {
        "key": "saintFridolinOfSackingenMonk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 6 }),
        "data": {}
      },
      {
        "key": "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 9 }),
        "data": {}
      },
      {
        "key": "saintMatilda",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 14 }),
        "data": {}
      },
      {
        "key": "saintClementMaryHofbauerPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 15 }),
        "data": {}
      },
      {
        "key": "saintGertrudeOfNivellesAbbess",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "saintLudgerBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 26 }),
        "data": {}
      },
      {
        "key": "saintLeoIxPopeOrBlessedMarcelCalloMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 19 }),
        "data": {}
      },
      {
        "key": "saintConradOfParzhamReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 21 }),
        "data": {}
      },
      {
        "key": "saintPeterCanisiusPriestAndDoctor",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 27 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.PATRON_OF_EUROPE,
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintFlorianAndHisCompanionsMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {}
      },
      {
        "key": "saintGotthardBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 5 }),
        "data": {}
      },
      {
        "key": "saintJohnNepomucenePriestAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {}
      },
      {
        "key": "saintHermannJosephPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
        "data": {}
      },
      {
        "key": "saintVitusMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 15 }),
        "data": {}
      },
      {
        "key": "saintBennoOfMeissenBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
        "data": {}
      },
      {
        "key": "saintHemmaOfGurk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {}
      },
      {
        "key": "saintOttoOfBambergBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 30 }),
        "data": {}
      },
      {
        "key": "visitationOfTheBlessedVirginMary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 2 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintUlrichOfAugsburg",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 4 }),
        "data": {}
      },
      {
        "key": "saintWillibaldBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 7 }),
        "data": {}
      },
      {
        "key": "saintKilianBishopAndCompanionsMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
        "data": {}
      },
      {
        "key": "saintsCanuteEricAndOlafMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 10 }),
        "data": {}
      },
      {
        "key": "saintBenedictOfNursiaAbbot",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintsHenryAndCunigunde",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {}
      },
      {
        "key": "saintMargaretOfAntiochVirginAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {}
      },
      {
        "key": "saintBrigittaReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintChristopherMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintPaulinusOfTrierBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 31 }),
        "data": {}
      },
      {
        "key": "saintHildegardOfBingenAbbessAndDoctor",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 17 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintLambertOfMaastrichtBishopAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {}
      },
      {
        "key": "saintMauriceAndCompanionsMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 22 }),
        "data": {}
      },
      {
        "key": "saintsRupertAndVirgiliusOfSalzburgBishops",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {}
      },
      {
        "key": "saintNicholasOfFlueHermit",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 25 }),
        "data": {}
      },
      {
        "key": "saintLeobaAbbess",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 28 }),
        "data": {}
      },
      {
        "key": "saintGallAbbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {}
      },
      {
        "key": "saintWendelinAbbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
        "data": {}
      },
      {
        "key": "saintUrsulaAndCompanionsVirginsAndMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 21 }),
        "data": {}
      },
      {
        "key": "saintWolfgangOfRegensburgBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 31 }),
        "data": {}
      },
      {
        "key": "saintHubertOfLiegeBishopOrSaintPirminAbbotAndBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "saintLeonardOfNoblacHermit",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 6 }),
        "data": {}
      },
      {
        "key": "saintWillibrordBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 7 }),
        "data": {}
      },
      {
        "key": "saintLeopoldIii",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 15 }),
        "data": {}
      },
      {
        "key": "saintGertrudeTheGreatVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 17 }),
        "data": {}
      },
      {
        "key": "saintElizabethOfHungaryReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 19 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintCOrbinianBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 20 }),
        "data": {}
      },
      {
        "key": "saintsConradAndGebhardOfConstanceBishops",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 26 }),
        "data": {}
      },
      {
        "key": "saintLuciusOfChurBishopAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 2 }),
        "data": {}
      },
      {
        "key": "saintBarbaraVirginAndMartyrOrBlessedAdolphKolpingPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "saintAnnoIiBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 5 }),
        "data": {}
      },
      {
        "key": "saintOdileOfAlsaceAbbess",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 13 }),
        "data": {}
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
