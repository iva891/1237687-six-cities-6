import {SortTypes} from './const';

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

const getSortedPlaceUp = (data, key) => data.sort((a, b) => a[key] - b[key]);
const getSortedPlaceDown = (data, key) => data.sort((a, b) => b[key] - a[key]);

const sortItems = (cityOffers, sortKey) => {
  switch (sortKey) {
    case SortTypes.PRICE_LOW:
      return getSortedPlaceUp(cityOffers, `price`);
    case SortTypes.PRICE_HIGH:
      return getSortedPlaceDown(cityOffers, `price`);
    case SortTypes.RATING:
      return getSortedPlaceDown(cityOffers, `rating`);
    default:
      return cityOffers;
  }
};

export {prepareData, sortItems};
