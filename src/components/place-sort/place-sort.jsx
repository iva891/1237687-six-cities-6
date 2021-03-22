import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {sortPlacecards} from '../../utils/const';

const PlaceSort = ({onSortChange, sortKey}) => {

  const sortList = useRef();

  const toggleSortList = () => {
    sortList.current.classList.toggle(`places__options--opened`);
  };

  const onItemToggleSortList = (item) => {
    onSortChange(item);
    toggleSortList();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleSortList}>
        {sortPlacecards.find((item) => item.sortType === sortKey).text}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={sortList}>
        {sortPlacecards.map((item) =>
          <li
            className={`${item.sortType === sortKey.sortType ? `places__option--active` : ``} places__option`}
            tabIndex={0}
            key={item.sortType}
            onClick={() => onItemToggleSortList(item)}
          >{item.text}</li>
        )}
      </ul>
    </form>
  );
};

PlaceSort.propTypes = {
  onSortChange: PropTypes.func,
  sortKey: PropTypes.string,
};

const mapStateToProps = (state) => ({
  sortKey: state.sortKey,
});

const mapDispatchToProps = (dispatch) => ({
  onSortChange: (sort) => dispatch(ActionCreator.setSort(sort)),
});


export {PlaceSort};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSort);
