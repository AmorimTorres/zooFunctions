const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  } if (animal.sex) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.filter((sexo) => sexo.sex === animal.sex).length;
      return acc;
    }, {})[animal.specie];
  }
  return species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {})[animal.specie];
}

countAnimals({ specie: 'snakes', sex: 'female' });

module.exports = countAnimals;
