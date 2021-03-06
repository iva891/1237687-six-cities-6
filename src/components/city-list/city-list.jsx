import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

const CityList = ({cities, city, onCityChange}) => {
  const handleCityClick = (evt, item) => {
    evt.preventDefault();
    onCityChange(item);
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((item, i) =>
        <li className="locations__item" key={i}>
          <a
            className={`locations__item-link tabs__item ${item === city ? `tabs__item--active` : ``} `}
            href="#"
            onClick={(evt) => handleCityClick(evt, item)}
          >
            <span>{item}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => dispatch(ActionCreator.changeCity(city))
});


export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
