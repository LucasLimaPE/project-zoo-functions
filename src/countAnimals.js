const { species } = require('../data/zoo_data');

/*
 Este código foi desenvolvido com o auxílio do colega Guilherme Azevedo, após várias tentativas de fazê-lo ele me explicou a questão do reduce e da negação usada no segundo if.
 https://www.linkedin.com/in/guilherme-azevedo-442170221/
*/

const countTotalAnimals = () =>
  species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});

const countAnimalWithSpecie = ({ specie }) =>
  species.filter((item) => item.name === specie)[0].residents.length;

const countAnimalWithSex = ({ specie, sex }) =>
  species
    .filter((item) => item.name === specie)[0]
    .residents.filter((secondItem) => secondItem.sex === sex).length;

function countAnimals(object) {
  if (!object) {
    return countTotalAnimals();
  }
  if (!object.sex) {
    return countAnimalWithSpecie(object);
  }
  return countAnimalWithSex(object);
}

module.exports = countAnimals;
