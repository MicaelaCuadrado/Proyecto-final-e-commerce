require("dotenv").config();


const userSeeder= require("./userSeeders")

userSeeder();
console.log("Se corrieron los seeders!");