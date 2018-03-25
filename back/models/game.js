'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.INTEGER
    }
  }, {});
  Game.associate = function(models) {
    Game.belongsTo(models.User);
  };
  return Game;
};