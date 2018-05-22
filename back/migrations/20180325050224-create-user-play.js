'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserPlays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color:{
        type:Sequelize.INTEGER
      },
      GameId: {
        type: Sequelize.INTEGER,
        references:{
          model:'games',
          key:'id'
        }
      },
      GameUserId: {
        type: Sequelize.INTEGER,
        references:{
          model:'gameusers',
          key:'id'
        }
      },
      CardId: {
        type: Sequelize.INTEGER,
        references:{
          model:'cards',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserPlays');
  }
};