'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserPlay = sequelize.define('UserPlay', {}, {});
  UserPlay.associate = function(models) {
    UserPlay.belongsTo(models.GameUser);
    UserPlay.belongsTo(models.Card);
  };
  return UserPlay;
};