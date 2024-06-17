const { Category } = require("../models");

async function categorySeeder() {
  const category = [
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
