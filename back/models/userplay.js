'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserPlay = sequelize.define('UserPlay', {
    color:DataTypes.INTEGER
  }, {});
  UserPlay.associate = function(models) {
    UserPlay.belongsTo(models.Game);
    UserPlay.belongsTo(models.GameUser);
    UserPlay.belongsTo(models.Card);
  };
  return UserPlay;
};