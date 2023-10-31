'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('user', { id: Sequelize.INTEGER });
  },

  async down (queryInterface, Sequelize) {
  return await queryInterface.dropTable('user');
  }
};
