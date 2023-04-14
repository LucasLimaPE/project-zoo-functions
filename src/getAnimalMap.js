const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const getAllAnimalsMap = () => {
  const result = species.reduce((acc, curr) => {
    acc[curr.location] = species
      .filter((item) => item.location === curr.location)
      .map((item) => item.name);
    return acc;
  }, {});

  return result;
};

function filterAnimalsBySex(animals, sex) {
  return animals.filter((animal) => animal.sex === sex);
}

function sortAnimalsByName(animals) {
  return animals.sort();
}

function mapAnimalsToNames(animals) {
  return animals.map((animal) => animal.name);
}

function getAllAnimalsMapWithName(...params) {
  const { includeNames, sex, sorted } = params[0] || {};
  const animalMap = species.reduce((accumulator, currentSpecies) => {
    let animals = currentSpecies.residents;
    if (sex) { animals = filterAnimalsBySex(animals, sex); }
    if (includeNames) {
      animals = mapAnimalsToNames(animals);
    } else {
      animals = getAllAnimalsMap();
    }
    if (sorted) {
      animals = sortAnimalsByName(animals);
    }
    const { location, name } = currentSpecies;
    accumulator[location] = [...(accumulator[location] || []), { [name]: animals }];
    return accumulator;
  }, {});

  return animalMap;
}

function getAnimalMap(...params) {
  if (params.length === 0 || !params[0].includeNames) {
    return getAllAnimalsMap();
  }
  return getAllAnimalsMapWithName(...params);
}

module.exports = getAnimalMap;
