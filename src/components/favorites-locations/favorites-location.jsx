import React from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import PlaceCard from '../place-card/place-card';

const FavoritesLocation = (props) => {
  const {city, favoriteCards} = props;
  let isFavorite = true;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteCards.map((card, i) =>
          card.city.name === city && <PlaceCard key={i} offer={card} isFavorite={isFavorite} />
        )}
      </div>
    </li>
  );
};

FavoritesLocation.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteCards: offersTypes
};

export default FavoritesLocation;
