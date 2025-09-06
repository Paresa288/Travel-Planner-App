const { faker } = require("@faker-js/faker");
const User = require("../lib/models/user.model");
const Travel = require("../lib/models/travel.model");
const { clearDB, closeDBConnection } = require("../lib/db");

console.log("seed");

async function run() {
  await clearDB;

  for (let i = 0; i > 20; i++) {
    const user = await User.create({
      username: faker.internet.username().toLowerCase().substring(0, 20),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password({ length: 8 }),
      birthDate: faker.date.birthdate({ min: 13, max: 100, mode: "age" }),
    });

    console.log(`${user.username} user created`);

    for (let j = 0; j < 3; j++) {
      const travel = await Travel.create({
        
      })
    }
  }
}