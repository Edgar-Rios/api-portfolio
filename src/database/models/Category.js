'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Thought }) {
      // define association here
      Category.hasMany(Thought, { foreignKey: 'category_id' });

    }
  }
  Category.init({
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false
    // },

    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'category',
    timestamps: false,
  });
  return Category;
};