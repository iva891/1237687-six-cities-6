
export const ActionType = {
  CHANGE_CITY: `main/changeCity`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  })
};
