'use strict';
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define('Card', {
    name: {
      type: DataTypes.STRING
    },
    xCoord: {
      type: DataTypes.STRING
    },
    yCoord: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.INTEGER
    },
    color: {
      type: DataTypes.INTEGER
    },
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};