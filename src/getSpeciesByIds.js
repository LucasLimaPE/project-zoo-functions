const { species } = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  return args.length === 0 ? [] : species.filter((animal) => args.includes(animal.id));
}

module.exports = getSpeciesByIds;
