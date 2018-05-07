'use strict';
module.exports = (sequelize, DataTypes) => {
  var GameUser = sequelize.define('GameUser', {
    position: {
      type: DataTypes.INTEGER,
    },
    status:{
      type: DataTypes.INTEGER
    },
    isCurrent:{
      type: DataTypes.BOOLEAN,
      defaultValue:false
    }
  }, {});
  GameUser.associate = function(models) {
    GameUser.belongsTo(models.Game);
    GameUser.belongsTo(models.User);
    GameUser.hasMany(models.UserCard);
  };
  return GameUser;
};