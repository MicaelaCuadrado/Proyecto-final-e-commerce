const { Category } = require("../models");

async function categorySeeder() {
  const category = [
    {
      name: "Indumentaria",
    },

    {
      name: "Accesorios",
    },
    {
      name: "Suplementos",
    },
  ];
  await Category.bulkCreate(category);
}

module.exports = categorySeeder;
