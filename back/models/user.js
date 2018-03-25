'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    verificationCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    isVerified:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  }, {});
  User.associate = function(models) {
    
  };
  return User;
};