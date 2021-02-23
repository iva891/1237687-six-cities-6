import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import PlaceCard from '../place-card/place-card';

const PlaceList = (props) => {
  const {numbers, offers} = props;
  const [state, setState] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {numbers.map((_, i) => <PlaceCard key={offers[i].id} offer = {offers[i]} onHover = {() => setState({...state, id: offers[i].id})} isFavorite={false} />)}
    </div>
  );
};

PlaceList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: offersTypes
};

export default PlaceList;
