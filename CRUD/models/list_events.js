'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  list_events.init({
    nama_event: DataTypes.STRING,
    tempat: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    deskripsi: DataTypes.STRING,
    nomor: DataTypes.STRING,
    email: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'list_events',
  });
  return list_events;
};