const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const getAllOpeningHours = () => {
  const result = Object.entries(hours).reduce((accumulator, currentDay) => {
    if (currentDay[0] === 'Monday') {
      accumulator.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return accumulator;
    }
    accumulator[currentDay[0]] = {
      officeHour: `Open from ${currentDay[1].open}am until ${currentDay[1].close}pm`,
      exhibition: species.filter((specie) => specie.availability
        .includes(currentDay[0])).map((item) => item.name),
    };
    return accumulator;
  }, {});
  return result;
};

function getSchedule(...params) {
  if (params.length === 0) {
    return getAllOpeningHours();
  }
  const animal = species.filter((item) => item.name === params[0]);
  const day = Object.entries(hours).filter((item) => item[0] === params[0]);
  if (day.length > 0) {
    return { [params[0]]: getAllOpeningHours()[params[0]] };
  }
  if (animal.length > 0) {
    return animal[0].availability;
  }
  return getAllOpeningHours();
}

module.exports = getSchedule;
