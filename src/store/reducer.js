import {ActionType} from './action';

const initialState = {
  city: `Paris`,
  offers: [],
  isDataLoad: false
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
        isDataLoad: true
      };
    default:
      return {...state};
  }
};

export {reducer};
