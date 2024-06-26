'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({ matches }) {
      user.hasMany(matches, {
        foreignKey: 'user_id',
      });
    }
  }
  user.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
