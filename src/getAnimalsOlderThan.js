const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age2) {
  const filterAnimal = species.filter((element) => element.name === animal);
  return filterAnimal.every((element) =>
    element.residents.every((elementAge) => elementAge.age >= age2));
}

module.exports = getAnimalsOlderThan;
