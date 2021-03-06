import PropTypes from 'prop-types';

export const offerTypes = PropTypes.shape({
  city: PropTypes.shape({
    location: PropTypes.objectOf(PropTypes.number),
    name: PropTypes.string.isRequired
  }),
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool,
    name: PropTypes.string
  }),
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.number),
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

export const offersTypes = PropTypes.arrayOf(offerTypes);
