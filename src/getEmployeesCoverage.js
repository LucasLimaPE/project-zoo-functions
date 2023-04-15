const { employees, species } = require('../data/zoo_data');

/*
Recibi ajuda do colega Guilherme Azevedo para construção desse código.
https://www.linkedin.com/in/guilherme-azevedo-442170221/
*/

const listEmployees = () => {
  const result = employees.reduce((acc, curr, index) => {
    const object = {
      id: curr.id,
      fullName: `${curr.firstName} ${curr.lastName}`,
      species: species.filter((specie) => curr.responsibleFor.includes(specie.id))
        .map((nameSpecie) => nameSpecie.name),
      locations: species.filter((specie) => curr.responsibleFor.includes(specie.id))
        .map((nameSpecie) => nameSpecie.location),
    };
    acc[index] = object;
    return acc;
  }, []);
  return result;
};

const list = listEmployees();

function listName(nome) {
  const getId = list.find((element) => element.fullName.includes(nome));
  if (!getId) {
    throw new Error('Informações inválidas');
  }
  return getId;
}

function listId(id) {
  const getId = list.find((element) => element.id.includes(id));
  if (!getId) {
    throw new Error('Informações inválidas');
  }
  return getId;
}

function getEmployeesCoverage(object) {
  if (!object) {
    return listEmployees();
  } if (object.name) {
    return listName(object.name);
  } if (object.id) {
    return listId(object.id);
  }
}

module.exports = getEmployeesCoverage;
