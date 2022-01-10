const data = require('../data/zoo_data');
const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => { acc[specie.name] = specie.residents.length;
      return acc;
  }, {});
}

console.log(countAnimals());

module.exports = countAnimals;