
export const ActionType = {
  CHANGE_CITY: `common/changeCity`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  })
};
