'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserCard = sequelize.define('UserCard', {
    status: DataTypes.INTEGER
  }, {});
  UserCard.associate = function(models) {
    UserCard.belongsTo(models.Card);
    UserCard.belongsTo(models.GameUser);
  };
  return UserCard;
};