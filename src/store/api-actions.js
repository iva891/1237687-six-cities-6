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
  .then((data) => dispatch(ActionCreator.setOffer(data, false)))
  .catch(() => dispatch(ActionCreator.setOffer({}, true)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then(({
    data
  }) => data.map(prepareData))
  .then((data) => dispatch(ActionCreator.setComments(data)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
  .then(({
    data
  }) => data.map(prepareData))
  .then((data) => dispatch(ActionCreator.setNearbyOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => prepareData(data))
    .then((data) => dispatch(ActionCreator.setUser(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(true)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => prepareData(data))
    .then((data) => dispatch(ActionCreator.setUser(data)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.logoutUser()))
);

export const submitComment = ({comment, rating, id}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({
      data
    }) => data.map(prepareData))
    .then((data) => dispatch(ActionCreator.setComments(data)))
    .catch((err) => dispatch(ActionCreator.reviewError(err.response)))
);

export const fetchOfferFavorite = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}`)
  .then(({
    data
  }) => prepareData(data))
  .then((data) => {
    if (data.isFavorite === true) {
      api.post(`/favorite/${data.id}/0`);
    } else {
      api.post(`/favorite/${data.id}/1`);
    }
  });
};
