import {ActionType} from './action';

const initialState = {
  city: `Paris`,
  offers: [],
  favorites: [],
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
    default:
      return {...state};
  }
};

export {reducer};
