'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
          return queryInterface.bulkInsert('cards', [
            {"name":"R9","xCoord":"117","yCoord":"0","type":"1","color":"1"},
            {"name":"R8","xCoord":"176","yCoord":"0","type":"1","color":"1"},
            {"name":"R7","xCoord":"235","yCoord":"0","type":"1","color":"1"},
            {"name":"R6","xCoord":"294","yCoord":"0","type":"1","color":"1"},
            {"name":"R5","xCoord":"353","yCoord":"0","type":"1","color":"1"},
            {"name":"R4","xCoord":"411","yCoord":"0","type":"1","color":"1"},
            {"name":"R3","xCoord":"470","yCoord":"0","type":"1","color":"1"},
            {"name":"R2","xCoord":"529","yCoord":"0","type":"1","color":"1"},
            {"name":"R1","xCoord":"588","yCoord":"0","type":"1","color":"1"},
            {"name":"R0","xCoord":"58","yCoord":"0","type":"1","color":"1"},
            {"name":"B9","xCoord":"117","yCoord":"367","type":"1","color":"2"},
            {"name":"B8","xCoord":"176","yCoord":"367","type":"1","color":"2"},
            {"name":"B7","xCoord":"235","yCoord":"367","type":"1","color":"2"},
            {"name":"B6","xCoord":"294","yCoord":"367","type":"1","color":"2"},
            {"name":"B5","xCoord":"353","yCoord":"367","type":"1","color":"2"},
            {"name":"B4","xCoord":"411","yCoord":"367","type":"1","color":"2"},
            {"name":"B3","xCoord":"470","yCoord":"367","type":"1","color":"2"},
            {"name":"B2","xCoord":"529","yCoord":"367","type":"1","color":"2"},
            {"name":"B1","xCoord":"588","yCoord":"367","type":"1","color":"2"},
            {"name":"B0","xCoord":"58","yCoord":"367","type":"1","color":"2"},
            {"name":"G9","xCoord":"117","yCoord":"458","type":"1","color":"3"},
            {"name":"G8","xCoord":"176","yCoord":"458","type":"1","color":"3"},
            {"name":"G7","xCoord":"235","yCoord":"458","type":"1","color":"3"},
            {"name":"G6","xCoord":"294","yCoord":"458","type":"1","color":"3"},
            {"name":"G5","xCoord":"353","yCoord":"458","type":"1","color":"3"},
            {"name":"G4","xCoord":"411","yCoord":"458","type":"1","color":"3"},
            {"name":"G3","xCoord":"470","yCoord":"458","type":"1","color":"3"},
            {"name":"G2","xCoord":"529","yCoord":"458","type":"1","color":"3"},
            {"name":"G1","xCoord":"588","yCoord":"458","type":"1","color":"3"},
            {"name":"G0","xCoord":"58","yCoord":"458","type":"1","color":"3"},
            {"name":"Y9","xCoord":"117","yCoord":"550","type":"1","color":"4"},
            {"name":"Y8","xCoord":"176","yCoord":"550","type":"1","color":"4"},
            {"name":"Y7","xCoord":"235","yCoord":"550","type":"1","color":"4"},
            {"name":"Y6","xCoord":"294","yCoord":"550","type":"1","color":"4"},
            {"name":"Y5","xCoord":"353","yCoord":"550","type":"1","color":"4"},
            {"name":"Y4","xCoord":"411","yCoord":"550","type":"1","color":"4"},
            {"name":"Y3","xCoord":"470","yCoord":"550","type":"1","color":"4"},
            {"name":"Y2","xCoord":"529","yCoord":"550","type":"1","color":"4"},
            {"name":"Y1","xCoord":"588","yCoord":"550","type":"1","color":"4"},
            {"name":"Y0","xCoord":"58","yCoord":"550","type":"1","color":"4"},
            {"name":"RS","xCoord":"588","yCoord":"274","type":"2","color":"1"},
            {"name":"RR","xCoord":"529","yCoord":"274","type":"3","color":"1"},
            {"name":"RT","xCoord":"470","yCoord":"274","type":"4","color":"1"},
            {"name":"YS","xCoord":"411","yCoord":"274","type":"2","color":"4"},
            {"name":"YR","xCoord":"353","yCoord":"274","type":"3","color":"4"},
            {"name":"YT","xCoord":"294","yCoord":"274","type":"4","color":"4"},
            {"name":"GS","xCoord":"340","yCoord":"274","type":"2","color":"3"},
            {"name":"GR","xCoord":"176","yCoord":"274","type":"3","color":"3"},
            {"name":"GT","xCoord":"117","yCoord":"274","type":"4","color":"3"},
            {"name":"BS","xCoord":"58","yCoord":"274","type":"2","color":"2"},
            {"name":"BR","xCoord":"588","yCoord":"182","type":"3","color":"2"},
            {"name":"BT","xCoord":"529","yCoord":"182","type":"4","color":"2"},
            {"name":"WC","xCoord":"470","yCoord":"182","type":"5","color":"0"},
            {"name":"WC","xCoord":"411","yCoord":"182","type":"5","color":"0"},
            {"name":"WF","xCoord":"353","yCoord":"182","type":"6","color":"0"},
            {"name":"WF","xCoord":"294","yCoord":"182","type":"6","color":"0"}
            ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
