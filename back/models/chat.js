'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chat = sequelize.define('Chat', {
    message: {
      type: DataTypes.STRING
    }
  }, {});
  Chat.associate = function(models) {
    Chat.belongsTo(models.GameUser);
  };
  return Chat;
};