const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const { address } = require("faker/lib/locales/az");

async function userSeeder() {
  for (let i = 0; i < 20; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const newUser = {
      firstname,
      lastname,
      email: faker.internet.email({ firstName: firstname, lastName: lastname }),
      phoneNumber: faker.phone.number(),
      password: "1234",
      address: "Anima 123",
      phoneNumber: "12345678",
    };

    await User.create(newUser);
  }
}

module.exports = userSeeder;
