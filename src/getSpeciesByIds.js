const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  if (args.length === undefined) {
    return [];
  }
  if (args.length === 1) {
    return species.filter((animal) => animal.id === args[0]);
  }
  return species.filter((element, index) => element.id === args[index]);
}

module.exports = getSpeciesByIds;
