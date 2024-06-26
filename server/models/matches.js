'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matches extends Model {
    static associate({ user }) {
      matches.belongsTo(user, {
        foreignKey: 'user_id'
      });
    }
  }
  matches.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'matches',
  });
  return matches;
};
