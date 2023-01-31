'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Owner }) {
      // define association here
      // Contact.belongsTo(Owner);
      Contact.hasOne(Owner, { foreignKey: 'contact_id' });

    }
  }
  Contact.init({
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false
    // },

    email: DataTypes.STRING(100),

    phone: DataTypes.STRING(20),

    linkedin: DataTypes.STRING(150),

    github: DataTypes.STRING(150),

  }, {
    sequelize,
    modelName: 'Contact',
    tableName: 'contact',
    timestamps: false,
  });
  return Contact;
};