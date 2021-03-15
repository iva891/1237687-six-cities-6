import React from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import PlaceCard from '../place-card/place-card';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const PlaceList = (props) => {
  const {cityNumbers, cityOffers, isRoom, onHoverCard} = props;

  return (
    <div className={`${isRoom
      ? `near-places__list`
      : `cities__places-list tabs__content`} places__list`}>
      {cityNumbers.map((_, i) => <PlaceCard key={cityOffers[i].id} offer = {cityOffers[i]} onHover = {() => onHoverCard(cityOffers[i].id)} isRoom={isRoom} />)}
      {/* {cityNumbers.map((_, i) => <PlaceCard key={cityOffers[i].id} offer = {cityOffers[i]} onHover = {() => setState({...state, id: cityOffers[i].id})} isRoom />)} */}
    </div>
  );
};

PlaceList.propTypes = {
  cityNumbers: PropTypes.array.isRequired,
  cityOffers: offersTypes,
  isRoom: PropTypes.bool,
  onHoverCard: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onHoverCard: (id) => dispatch(ActionCreator.hoverCard(id))
});

export {PlaceList};
export default connect(null, mapDispatchToProps)(PlaceList);
