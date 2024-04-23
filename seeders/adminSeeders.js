const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

async function adminSeeder() {
  for (let i = 0; i < 5; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const hashedPassword = await bcrypt.hash("1234", 10);

    const newAdmin = {
      firstname,
      lastname,
      email: faker.internet.email({ firstName: firstname, lastName: lastname }),
      password: hashedPassword,
    };
    await Admin.create(newAdmin);
  }
}

module.exports = adminSeeder;
