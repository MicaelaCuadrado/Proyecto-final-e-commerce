require("dotenv").config();

const userSeeder = require("./userSeeders");
const adminSeeder = require("./adminSeeders");
const orderSeeder = require("./orderSeeders");
const productSeeder = require("./productsSeeders");
const categorySeeder = require("./categorySeeders");

async function runAllSeeders() {
  await userSeeder();
  await adminSeeder();
  await categorySeeder();
  await productSeeder();
  await orderSeeder();
  console.log("Se corrieron los seeders!");
  process.exit();
}

runAllSeeders()