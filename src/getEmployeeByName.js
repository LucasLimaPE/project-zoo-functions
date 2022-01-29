const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  if (employeeName !== undefined) {
    const result = employees.filter((employee) => employee.firstName === employeeName
   || employee.lastName === employeeName);
    return result[0];
  }
}

module.exports = getEmployeeByName;
