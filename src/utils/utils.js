import {SortType} from './const';

const setType = (value) => {
  const regex = /^\[object (\S+?)\]$/;
  const matches = Object.prototype.toString.call(value).match(regex) || [];

  return (matches[1] || `undefined`).toLowerCase();
};

const prepareData = (obj) => Object
  .entries(obj)
  .reduce((acc, [key, value]) => {

    if (setType(value) === `object`) {
      value = prepareData(value);
    }

    const modifiedKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    return ({
      ...acc,
      ...{[modifiedKey]: value},
    });
  }, {});

const getSortedUp = (data, key) => data.sort((a, b) => a[key] - b[key]);
const getSortedDown = (data, key) => data.sort((a, b) => b[key] - a[key]);

const sortCityOffers = (cityOffers, sortKey) => {
  switch (sortKey) {
    case SortType.PRICE_LOW:
      return getSortedUp(cityOffers, `price`);
    case SortType.PRICE_HIGH:
      return getSortedDown(cityOffers, `price`);
    case SortType.RATING:
      return getSortedDown(cityOffers, `rating`);
    default:
      return cityOffers;
  }
};

const sortComments = (data) => data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export {prepareData, sortCityOffers, sortComments};
