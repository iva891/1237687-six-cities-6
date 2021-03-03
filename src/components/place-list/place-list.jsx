import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import PlaceCard from '../place-card/place-card';

const PlaceList = (props) => {
  const {cityNumbers, cityOffers} = props;
  const [state, setState] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {cityNumbers.map((_, i) => <PlaceCard key={cityOffers[i].id} offer = {cityOffers[i]} onHover = {() => setState({...state, id: cityOffers[i].id})} />)}
    </div>
  );
};

PlaceList.propTypes = {
  cityNumbers: PropTypes.array.isRequired,
  cityOffers: offersTypes
};

export default PlaceList;
