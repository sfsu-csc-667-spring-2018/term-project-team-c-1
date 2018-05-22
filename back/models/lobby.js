'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lobby = sequelize.define('Lobby', {
    message: {
      type: DataTypes.STRING
    }
  }, {});
  Lobby.associate = function(models) {
    Lobby.belongsTo(models.User);
  };
  return Lobby;
};