
export const ActionType = {
  CHANGE_CITY: `common/changeCity`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_FAVORITES: `favorites/loadFavofites`,
  LOAD_OFFER: `room/loadOffer`,
  RESET_OFFER: `room/resetOffer`,
  LOAD_COMMENTS: `room/loadComments`,
  RESET_COMMENTS: `room/resetComments`,
  LOAD_NEARBY_OFFERS: `room/loadNearbyOffers`,
  RESET_NEARBY_OFFERS: `room/resetNearbyOffers`,
  HOVER_CARD: `placeList/hoverCard`,
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
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer
  }),
  resetOffer: () => ({
    type: ActionType.RESET_OFFER,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  resetComments: () => ({
    type: ActionType.RESET_COMMENTS,
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers
  }),
  resetNearbyOffers: () => ({
    type: ActionType.RESET_NEARBY_OFFERS,
  }),
  hoverCard: (id) => ({
    type: ActionType.HOVER_CARD,
    payload: id
  }),
};
