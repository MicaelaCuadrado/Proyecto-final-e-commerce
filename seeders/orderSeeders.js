const faker = require("@faker-js/faker");
const { Order } = require("../models");

async function orderSeeder() {
  for (let i = 0; i < 5; i++) {
    const newOrder = {
      status: "pending",
      userId: 1,
      items: [
        {
          name: "Musculosa Gris",
          price: 690,
          stock: 25,
        },
        {
          name: "Remera Negra",
          price: 720,
          stock: 15,
        },
        {
          name: "Remera Celeste",
          price: 720,
          stock: 15,
        },
        {
          name: "Remera Naranja",
          price: 500,
          stock: 10,
        },
        {
          name: "Bandas Elásticas de Resistencia",
          price: 549,
          stock: 20,
        },
      ],
    };
    await Order.create(newOrder);
  }
}

module.exports = orderSeeder;
