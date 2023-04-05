const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((item) => item.managers.includes(id));
}

const throwError = () => {
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

function getRelatedEmployees(managerId) {
  const maneged = employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((employee2) => `${employee2.firstName} ${employee2.lastName}`);

  return isManager(managerId) ? maneged : throwError();
}

module.exports = { isManager, getRelatedEmployees };
