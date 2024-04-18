const faker = require("@faker-js/faker");
const { Order } = require("../models");

async function orderSeeder() {
  for (let i = 0; i < 5; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const newOrder = {
      firstname,
      lastname,
      status: "pending",
    };
    await Order.create(newOrder);
  }
}

module.exports = orderSeeder;
