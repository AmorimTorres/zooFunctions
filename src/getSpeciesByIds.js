const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, specie) => {
    acc.push(species.find((findSpecie) => findSpecie.id === specie));
    return acc;
  }, []);
}

getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', '0938aa23-f153-4937-9f88-4858b24d6bce');

module.exports = getSpeciesByIds;
