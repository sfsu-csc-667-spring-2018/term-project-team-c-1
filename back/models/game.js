'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.INTEGER
    },
    direction: {
      type: DataTypes.BOOLEAN
    },
  }, {});
  Game.associate = function(models) {
    Game.belongsTo(models.User);
    Game.hasMany(models.GameUser);
  };
  return Game;
};