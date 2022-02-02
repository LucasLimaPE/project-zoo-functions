const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/*
Recibi ajuda do colega Guilherme Azevedo para construção desse código.
*/

const listEmployees = () => {
  const array = [];
  employees.forEach((employee) => {
    const objeto = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map((nameSpecie) => nameSpecie.name),
      locations: species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map((nameSpecie) => nameSpecie.location),
    };
    array.push(objeto);
  });
  return array;
};

const list = listEmployees();

function listName(nome) {
  return list.find((element) => element.fullName.includes(nome));
}

function listId(id) {
  const pegaID = list.find((element) => element.id.includes(id));
  if (!pegaID) {
    throw new Error('Informações inválidas');
  }
  return pegaID;
}

function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return listEmployees();
  } if (parametro.name) {
    return listName(parametro.name);
  } if (parametro.id) {
    return listId(parametro.id);
  }
}

module.exports = getEmployeesCoverage;
