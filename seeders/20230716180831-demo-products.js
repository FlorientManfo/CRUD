"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Orange",
        unit_price: 0.9,
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Peach",
        unit_price: 0.9,
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Products', null, {})
  },
};
