require("dotenv").config();

const userSeeder = require("./userSeeders");
const adminSeeder = require("./adminSeeders");

userSeeder();
adminSeeder();
console.log("Se corrieron los seeders!");
