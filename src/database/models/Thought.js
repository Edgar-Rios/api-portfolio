'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thought extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( {Category, Owner} ) {
      // define association here
      Thought.belongsTo(Category, { foreignKey: "category_id"});
      Thought.belongsTo(Owner, { foreignKey: "owner_id"});
    }
  }
  Thought.init({
   
    title: {
        type: DataTypes.STRING(75),
        allowNull: false,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
        
  }, {
    sequelize,
    modelName: 'Thought',
    tableName: 'Thought',
    timestamps: false,
  });
  return Thought;
};