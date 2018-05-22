'use strict';
module.exports = (sequelize, DataTypes) => {
  var Session = sequelize.define('Session', {
    jwtCode: {
      type: DataTypes.STRING
    },
    expiry: {
      type: DataTypes.DATE
    }
  }, {});
  Session.associate = function(models) {
    Session.belongsTo(models.User);
  };
  return Session;
};