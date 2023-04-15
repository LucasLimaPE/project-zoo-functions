/*
Este código foi desenvolvido com a ajuda do colega Guilherme Azevedo.
*/

const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((element) => element.id === id);
  const animalId = employee.responsibleFor[0];
  const animals = species.find((element) => element.id === animalId);
  const olderAnimal = animals.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
