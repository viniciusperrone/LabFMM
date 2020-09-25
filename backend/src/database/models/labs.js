'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class labs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  labs.init({
    user: DataTypes.STRING,
    data: DataTypes.DATE,
    tempo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'labs',
  });
  return labs;
};