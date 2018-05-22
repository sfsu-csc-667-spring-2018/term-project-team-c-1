'use strict';
module.exports = (sequelize, DataTypes) => {
  var GameCard = sequelize.define('GameCard', {
    status: DataTypes.INTEGER
  }, {});
  GameCard.associate = function(models) {
    GameCard.belongsTo(models.Card);
    GameCard.belongsTo(models.Game);
  };
  return GameCard;
};