const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");

async function adminSeeder() {
  for (let i = 0; i < 5; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const newUser = {
      firstname,
      lastname,
      email: faker.internet.email({ firstName: firstname, lastName: lastname }),
      phoneNumber: faker.phone.number(),
      password: "1234",
    };
    await Admin.create(newUser);
  }
}

module.exports = adminSeeder;