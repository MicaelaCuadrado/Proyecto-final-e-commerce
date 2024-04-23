const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

async function userSeeder() {
  for (let i = 0; i < 20; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const hashedPassword = await bcrypt.hash("1234", 10);
    const newUser = {
      firstname,
      lastname,
      email: faker.internet.email({ firstName: firstname, lastName: lastname }),
      phoneNumber: faker.phone.number(),
      password: hashedPassword,
    };

    await User.create(newUser);
  }
}

module.exports = userSeeder;
