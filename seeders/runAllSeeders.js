require("dotenv").config();

const userSeeder = require("./userSeeders");
const adminSeeder = require("./adminSeeders");
const orderSeeder = require("./orderSeeders");
const productSeeder = require("./productsSeeders");
const categorySeeder = require("./categorySeeders");

userSeeder();
adminSeeder();
orderSeeder();
productSeeder();
categorySeeder();
console.log("Se corrieron los seeders!");


