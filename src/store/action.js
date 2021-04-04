
export const ActionType = {
  CHANGE_CITY: `common/changeCity`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_FAVORITES: `favorites/loadFavofites`,
  SET_OFFER: `room/setOffer`,
  SET_COMMENTS: `room/setComments`,
  SET_NEARBY_OFFERS: `room/setNearbyOffers`,
  HOVER_CARD: `placeList/setActiveCardId`,
  SET_SORT: `main/setSort`,
  REQUIRE_AUTHORIZATION: `common/requireAuthorization`,
  SET_USER: `login/setUser`,
  LOGOUT_USER: `common/logoutUser`,
  REVIEW_ERRROR: `reviewForm/reviewError`,
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
  setOffer: (offer, isNotFound) => ({
    type: ActionType.SET_OFFER,
    payload: offer,
    isNotFound,
  }),
  setComments: (comments) => ({
    type: ActionType.SET_COMMENTS,
    payload: comments
  }),
  setNearbyOffers: (offers) => ({
    type: ActionType.SET_NEARBY_OFFERS,
    payload: offers
  }),
  setActiveCardId: (id) => ({
    type: ActionType.HOVER_CARD,
    payload: id
  }),
  setSort: (sort) => ({
    type: ActionType.SET_SORT,
    payload: sort.sortType
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  setUser: (userData) => ({
    type: ActionType.SET_USER,
    payload: userData,
  }),
  logoutUser: () => ({
    type: ActionType.LOGOUT_USER,
  }),
  reviewError: (error) => ({
    type: ActionType.REVIEW_ERRROR,
    payload: error,
  }),
};
