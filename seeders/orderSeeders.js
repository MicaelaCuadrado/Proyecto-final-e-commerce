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
          description:
            "Remera de algodón gris. Lavable a maquina. Ideal para entrenar.",
          price: 690,
          stock: 25,
          category: "PENDIENTE",
          featured: true,
        },
        {
          name: "Remera Negra",
          description:
            "Remera de poliester negra. Lavable a maquina. Ideal para entrenar.",
          price: 720,
          stock: 15,
          category: "PENDIENTE",
          featured: false,
        },
        {
          name: "Remera Celeste",
          description:
            "Remera de algodón celeste. Lavable a maquina. Ideal para entrenar.",
          price: 720,
          stock: 15,
          category: "PENDIENTE",
          featured: false,
        },
        {
          name: "Remera Naranja",
          description:
            "Remera de algodón naranja. Lavable a maquina. Ideal para entrenar.",
          price: 500,
          stock: 10,
          category: "PENDIENTE",
          featured: true,
        },
        {
          name: "Bandas Elásticas de Resistencia",
          description:
            "Este pack contiene 4 bandas de latex en 4 niveles de resistencia: ligero, medio, pesado.",
          price: 549,
          stock: 20,
          category: "PENDIENTE",
          featured: false,
        },
      ],
    };
    await Order.create(newOrder);
  }
}

module.exports = orderSeeder;
