import PropTypes from 'prop-types';

export const offerTypes = PropTypes.shape({
  city: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
  premium: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

export const offersTypes = PropTypes.arrayOf(offerTypes);
