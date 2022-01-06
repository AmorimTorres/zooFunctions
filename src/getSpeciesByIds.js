const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const speciesFinding = [];
  ids.forEach((id) => speciesFinding.push(species.find((specie) => specie.id === id)));
  return speciesFinding;
}

console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
