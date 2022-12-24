const peopleNames = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");

const getPeopleInCity = (peopleName) => {
  return getFirstName(peopleName);
};

module.exports = getPeopleInCity;
