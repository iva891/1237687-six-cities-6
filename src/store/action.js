
export const ActionType = {
  CHANGE_CITY: `common/changeCity`,
  LOAD_OFFERS: `offers/loadOffers`,
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
};
