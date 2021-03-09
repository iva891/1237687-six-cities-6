import {ActionCreator} from './action';
import {prepareData} from '../utils/utils';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({
    data
  }) => data.map(prepareData))
  .then((data) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
  .then(({
    data
  }) => data.map(prepareData))
  .then((data) => dispatch(ActionCreator.loadFavorites(data)))
);
