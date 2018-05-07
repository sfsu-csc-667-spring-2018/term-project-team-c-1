'use strict';
module.exports = (sequelize, DataTypes) => {
  var GameDeck = sequelize.define('GameDeck', {
    status: DataTypes.INTEGER
  }, {});
  GameDeck.associate = function(models) {
    GameDeck.belongsTo(models.Card);
    GameDeck.belongsTo(models.Game);
  };
  return GameDeck;
};