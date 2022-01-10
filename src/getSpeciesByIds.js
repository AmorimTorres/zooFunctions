const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const speciesFinding = [];
  ids.forEach((id) => speciesFinding.push(species.find((specie) => specie.id === id)));
  return speciesFinding;
}

getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', '78460a91-f4da-4dea-a469-86fd2b8ccc84');

module.exports = getSpeciesByIds;
