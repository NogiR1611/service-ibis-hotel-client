'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('list_events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(255)
      },
      nama_event: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      tempat: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      tanggal: {
        allowNull: false,
        type: Sequelize.DATE  
      },
      deskripsi: {
        allowNull: false,
        type: Sequelize.STRING(2000)
      },
      nomor: {
        type: Sequelize.STRING(25)
      },
      email: {
        type: Sequelize.STRING(30)
      },
      foto: {
        type: Sequelize.STRING(32)
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('list_events');
  }
};