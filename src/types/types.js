import PropTypes from 'prop-types';

export const offerTypes = PropTypes.shape({
  city: PropTypes.shape({
    location: PropTypes.objectOf(PropTypes.number),
    name: PropTypes.string
  }),
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  }),
  id: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  location: PropTypes.objectOf(PropTypes.number),
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string
});

export const offersTypes = PropTypes.arrayOf(offerTypes);
