const data = require('../data/zoo_data');

/*
Este código foi feito com a ajuda do Colega Guilherme Azevedo.
*/

function countEntrants(entrants) {
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const child = entrants.filter((element) => element.age < 18);
  const senior = entrants.filter((element) => element.age >= 50);
  return {
    adult: adult.length,
    child: child.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const childTicket = entrants.filter((element) => element.age < 18).length;
  const adultTicket = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const seniorTicket = entrants.filter((element) => element.age >= 50).length;
  return (childTicket
 * 20.99) + (adultTicket * 49.99) + (seniorTicket * 24.99);
}

module.exports = { calculateEntry, countEntrants };
