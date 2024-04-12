const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");

async function adminSeeder() {
  for (let i = 0; i < 5; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const newAdmin = {
      firstname,
      lastname,
      email: faker.internet.email({ firstName: firstname, lastName: lastname }),
      password: "1234",
    };
    await Admin.create(newAdmin);
  }
}

module.exports = adminSeeder;
