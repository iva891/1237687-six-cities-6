import {ActionType} from './action';
import {SortTypes} from '../utils/const';

const initialState = {
  city: `Paris`,
  offers: [],
  favorites: [],
  offerPage: {
    offer: {},
    isNotFound: false
  },
  comments: [],
  nearbyOffers: [],
  activeCardId: 0,
  sortKey: SortTypes.POPULAR,
  authorizationStatus: true,
  user: {},
  reviewError: {},
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
        offerPage: {
          ...state.offerPage,
          offer: action.payload,
          isNotFound: action.isNotFound,
        },
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
    case ActionType.REVIEW_ERRROR:
      return {
        ...state,
        reviewError: action.payload
      };
    default:
      return {...state};
  }
};

export {reducer};
