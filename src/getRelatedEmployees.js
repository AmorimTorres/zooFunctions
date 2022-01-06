const data = require('../data/zoo_data');
const { employees } = data;

function isManager(id) {
  const employeesList = employees.some((employee) => employee.managers.find((item) => item === id));
  return employeesList;
}

function getRelatedEmployees(managerId) {
  const obj = employees.filter((pers) => pers.managers.find((pers1) => pers1 === managerId));
  if (isManager(managerId)) {
    return obj.map((emp) => `${emp.firstName} ${emp.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2');

console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = { isManager, getRelatedEmployees };
