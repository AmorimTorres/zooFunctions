const data = require('../data/zoo_data');
const { employees } = data;

function getEmployeeByName(employeeName) {
  const employeeByNameOrLastName = employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  if (!employeeName) {
    return {};
  }
  return employeeByNameOrLastName;
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;


