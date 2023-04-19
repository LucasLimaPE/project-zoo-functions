/*
Este código foi feito com a ajuda do Colega Guilherme Azevedo.
https://www.linkedin.com/in/guilherme-azevedo-442170221/
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
  if (entrants === null || entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult = 0, child = 0, senior = 0 } = countEntrants(entrants);
  return (child * 20.99) + (adult * 49.99) + (senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };
