'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('list_tempat_wisata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(50)
      },
      nama_tempat_wisata: {
        type: Sequelize.STRING(25)
      },
      lokasi: {
        type: Sequelize.STRING(15)
      },
      harga: {
        type: Sequelize.STRING(15)
      },
      deskripsi: {
        type: Sequelize.STRING(2000)
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
    await queryInterface.dropTable('list_tempat_wisata');
  }
};