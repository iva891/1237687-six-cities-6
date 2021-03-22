const sortTypes = {
  POPULAR: `popular`,
  PRICE_LOW: `priceLowToHigh`,
  PRICE_HIGH: `priceHighToLow`,
  RATING: `topRated`
};

const sortPlacecards = [
  {
    sortType: sortTypes.POPULAR,
    text: `Popular`,
  },
  {
    sortType: sortTypes.PRICE_LOW,
    text: `Price: low to high`,
  },
  {
    sortType: sortTypes.PRICE_HIGH,
    text: `Price: high to low`,
  },
  {
    sortType: sortTypes.RATING,
    text: `Top rated first`,
  },
];


export {sortTypes, sortPlacecards};
