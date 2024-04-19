const { Category } = require("../modelss");

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
  await Category.create(category);
}

module.exports = categorySeeder;
