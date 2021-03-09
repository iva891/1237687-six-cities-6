
export const ActionType = {
  CHANGE_CITY: `common/changeCity`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_FAVORITES: `favorites/loadFavofites`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),
};
