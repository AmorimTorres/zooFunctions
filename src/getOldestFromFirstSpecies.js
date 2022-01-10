const data = require('../data/zoo_data');

const { species, employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function getOldestFromFirstSpecies(id) {
  const specieByEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const specieByAnimal = species.find((specie) => specie.id === specieByEmployee).residents;
  const oldestAnimal = specieByAnimal.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);
  const values = Object.values(oldestAnimal);
  return values;
}

getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

module.exports = getOldestFromFirstSpecies;
