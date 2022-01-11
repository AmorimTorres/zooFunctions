const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const specieByEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const specieByAnimal = species.find((specie) => specie.id === specieByEmployee).residents;
  const oldestAnimal = specieByAnimal.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);
  const values = Object.values(oldestAnimal);
  return values;
}

getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

module.exports = getOldestFromFirstSpecies;
