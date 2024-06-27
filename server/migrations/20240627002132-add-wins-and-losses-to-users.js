'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'wins', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
    await queryInterface.addColumn('users', 'losses', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'wins')
    await queryInterface.removeColumn('users', 'losses')
  }
};
