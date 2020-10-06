'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('list_events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(50)
      },
      nama_event: {
        type: Sequelize.STRING(25)
      },
      tempat: {
        type: Sequelize.STRING(15)
      },
      tanggal: {
        type: Sequelize.DATE
      },
      deskripsi: {
        type: Sequelize.STRING(2000)
      },
      nomor: {
        type: Sequelize.STRING(16)
      },
      email: {
        type: Sequelize.STRING(25)
      },
      website: {
        type: Sequelize.STRING(30)
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