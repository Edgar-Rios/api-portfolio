'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Owner }) {
      // define association here
      Proyect.belongsTo(Owner, { foreignKey: "owner_id" });
    }
  }
  Proyect.init({
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false
    // },

    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "PROYECTO",
    },

    link: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Proyect',
    tableName: 'proyect',
    timestamps: false,
  });
  return Proyect;
};