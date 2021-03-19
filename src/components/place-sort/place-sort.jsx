import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {sortTypes} from '../../utils/const';
import {sortOffersTypes} from '../../types/types';

const PlaceSort = ({onSortChange, sortOffers}) => {
  const sortPlacecards = [
    {
      sortType: sortTypes.POPULAR,
      text: `Popular`,
    },
    {
      sortType: sortTypes.PRICE_LOW,
      text: `Price: low to high`,
    },
    {
      sortType: sortTypes.PRICE_HIGH,
      text: `Price: high to low`,
    },
    {
      sortType: sortTypes.RATING,
      text: `Top rated first`,
    },
  ];

  const toggleSortList = () => {
    document.querySelector(`.places__options.places__options--custom`).classList.toggle(`places__options--opened`);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => toggleSortList()}>
        {sortOffers.text}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        {sortPlacecards.map((item) =>
          <li
            className={`${item.sortType === sortOffers.sortType ? `places__option--active` : ``} places__option`}
            tabIndex={0}
            key={item.sortType}
            onClick={() => {
              onSortChange(item);
              toggleSortList();
            }}
          >{item.text}</li>
        )}
      </ul>
    </form>
  );
};

PlaceSort.propTypes = {
  onSortChange: PropTypes.func,
  sortOffers: sortOffersTypes,
};

const mapStateToProps = (state) => ({
  sortOffers: state.sortOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onSortChange: (sort) => dispatch(ActionCreator.setSort(sort)),
});


export {PlaceSort};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSort);
