'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Contact, Proyect, Thought }) {
      // define association here
      Owner.belongsTo(Contact, { foreignKey: 'contact_id' });

      Owner.hasMany(Proyect, {
        foreignKey: {
          name: 'owner_id',
          allowNull: false,
        }
      })
      Owner.hasMany(Thought, {
        foreignKey: {
          name: 'owner_id',
          allowNull: false,
        }
      })
    }
  }
  Owner.init({
    my_name: {
      type: DataTypes.STRING(45),

    },
    intro: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'Owner',
    tableName: 'owner',
    timestamps: false,
  });
  return Owner;
};