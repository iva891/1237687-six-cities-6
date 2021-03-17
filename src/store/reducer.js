import {ActionType} from './action';

const initialState = {
  city: `Paris`,
  offers: [],
  favorites: [],
  offer: {},
  comments: [],
  nearbyOffers: [],
  activeCardId: 0,
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
    default:
      return {...state};
  }
};

export {reducer};
