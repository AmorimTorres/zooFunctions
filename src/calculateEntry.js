const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, curr) => {
    const { age } = curr;
    if (age < 18) acc.child += 1;
    if (age >= 18 && age < 50) acc.adult += 1;
    if (age >= 50) acc.senior += 1;

    return acc;
  },
  { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
}

countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]);

calculateEntry([
  { name: 'Carlos Nogueira', age: 50 },
  { name: 'Núbia Souza', age: 18 },
]);

module.exports = { calculateEntry, countEntrants };
