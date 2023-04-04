const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age2) {
  const animalsOfTheScpecies = species.filter((item) => item.name === animal)[0].residents;

  return animalsOfTheScpecies.every((item) => item.age >= age2);
}

module.exports = getAnimalsOlderThan;
