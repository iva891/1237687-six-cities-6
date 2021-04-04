const SortTypes = {
  POPULAR: `popular`,
  PRICE_LOW: `priceLowToHigh`,
  PRICE_HIGH: `priceHighToLow`,
  RATING: `topRated`
};

const SORT_PLACECARDS = [
  {
    sortType: SortTypes.POPULAR,
    text: `Popular`,
  },
  {
    sortType: SortTypes.PRICE_LOW,
    text: `Price: low to high`,
  },
  {
    sortType: SortTypes.PRICE_HIGH,
    text: `Price: high to low`,
  },
  {
    sortType: SortTypes.RATING,
    text: `Top rated first`,
  },
];


export {SortTypes, SORT_PLACECARDS};
