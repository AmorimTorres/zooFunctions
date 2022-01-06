const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animals = species.filter((specie) => specie.name === animal)[0].residents;
  const animalAge = animals.every((minAge) => minAge.age >= age);
  return animalAge;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
