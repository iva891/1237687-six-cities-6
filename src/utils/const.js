const SortType = {
  POPULAR: `popular`,
  PRICE_LOW: `priceLowToHigh`,
  PRICE_HIGH: `priceHighToLow`,
  RATING: `topRated`
};

const SORT_PLACECARDS = [
  {
    sortType: SortType.POPULAR,
    text: `Popular`,
  },
  {
    sortType: SortType.PRICE_LOW,
    text: `Price: low to high`,
  },
  {
    sortType: SortType.PRICE_HIGH,
    text: `Price: high to low`,
  },
  {
    sortType: SortType.RATING,
    text: `Top rated first`,
  },
];


export {SortType, SORT_PLACECARDS};
