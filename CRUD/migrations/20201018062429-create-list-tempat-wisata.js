'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('list_tempat_wisata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(255)
      },
      nama_tempat_wisata: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      lokasi: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      harga: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      urlimage: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      deskripsi: {
        allowNull: false,
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