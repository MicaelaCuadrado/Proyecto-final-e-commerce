require("dotenv").config();

const userSeeder = require("./userSeeders");
const adminSeeder = require("./adminSeeders");
const orderSeeder = require("./orderSeeders");
const productSeeder = require("./productsSeeders");

userSeeder();
adminSeeder();
orderSeeder();
productSeeder;
console.log("Se corrieron los seeders!");
