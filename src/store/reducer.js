import {ActionType} from './action';

const initialState = {
  city: `Paris`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    default:
      return {...state};
  }
};

export {reducer};
