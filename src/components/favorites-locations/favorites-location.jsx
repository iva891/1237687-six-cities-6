import React from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import PlaceCard from '../place-card/place-card';

const FavoritesLocation = (props) => {
  const {city, favorites} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((card) =>
          card.city.name === city && <PlaceCard key={card.id} offer={card} isCardFavorite />
        )}
      </div>
    </li>
  );
};

FavoritesLocation.propTypes = {
  city: PropTypes.string.isRequired,
  favorites: offersTypes
};

export default FavoritesLocation;
