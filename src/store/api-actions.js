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

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
  .then(({
    data
  }) => prepareData(data))
  .then((data) => dispatch(ActionCreator.loadOffer(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then(({
    data
  }) => data.map(prepareData))
  .then((data) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
  .then(({
    data
  }) => data.map(prepareData))
  .then((data) => dispatch(ActionCreator.loadNearbyOffers(data)))
);
