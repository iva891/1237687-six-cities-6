import {ActionType} from './action';
import {sortTypes} from '../utils/const';

const initialState = {
  city: `Paris`,
  offers: [],
  favorites: [],
  offer: {},
  comments: [],
  nearbyOffers: [],
  activeCardId: 0,
  sortKey: sortTypes.POPULAR,
  authorizationStatus: false,
  user: {},
  redirectToNotFound: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case ActionType.SET_OFFER:
      return {
        ...state,
        offer: action.payload,
        redirectToNotFound: false,
      };
    case ActionType.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.SET_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    case ActionType.HOVER_CARD:
      return {
        ...state,
        activeCardId: action.payload,
      };
    case ActionType.SET_SORT:
      return {
        ...state,
        sortKey: action.payload,
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
        authorizationStatus: true
      };
    case ActionType.LOGOUT_USER:
      return {
        ...state,
        user: {},
        authorizationStatus: false
      };
    case ActionType.REDIRECT_NOT_FOUND:
      return {
        ...state,
        redirectToNotFound: action.payload
      };
    default:
      return {...state};
  }
};

export {reducer};
