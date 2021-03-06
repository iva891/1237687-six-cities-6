import {ActionCreator} from './action';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({
    data
  }) => data.map(changeKeysName))
  .then((data) => dispatch(ActionCreator.loadOffers(data)))
);

const changeKeysName = (offer) => {
  const modifiedOffer = {
    ...offer,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    previewImage: offer.preview_image,
    maxAdults: offer.max_adults,
  };

  delete modifiedOffer.host.avatar_url;
  delete modifiedOffer.host.is_pro;
  delete modifiedOffer.is_favorite;
  delete modifiedOffer.is_premium;
  delete modifiedOffer.max_adults;
  delete modifiedOffer.preview_image;

  return modifiedOffer;
};
