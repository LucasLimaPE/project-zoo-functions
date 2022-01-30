const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/*
 Este código foi desenvolvido com o auxílio do colega Guilherme Azevedo, após várias tentativas de fazê-lo ele me explicou a questão do reduce e da negação usada no segundo if.
*/

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce(((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }), {});
  } if (animal.specie && !animal.sex) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
  return species.find((element) => element.name === animal.specie)
    .residents.filter((element) => element.sex === animal.sex).length;
}
module.exports = countAnimals;
