import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import PlaceSort from '../place-sort/place-sort';
import PlaceList from '../place-list/place-list';
import CityList from '../city-list/city-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffers} from "../../store/api-actions";
import {sortItems} from '../../utils/utils';

const MainPage = (props) => {
  const {numbers, offers, cities, city, onLoadOffers, sortKey} = props;
  const cityOffers = offers.filter((offer) => offer.city.name === city);

  sortItems(cityOffers, sortKey);

  const cityNumbers = numbers.length > cityOffers.length ? cityOffers : numbers;

  useEffect(() => {
    if (offers.length === 0) {
      onLoadOffers();
    }
  }, [offers, onLoadOffers]);

  if (offers.length === 0) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList cities={cities} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityNumbers.length === 0 ? `No` : cityOffers.length} places to stay in {city}</b>

                <PlaceSort />
                <PlaceList cityOffers={cityOffers} cityNumbers={cityNumbers} />

              </section>
              <div className="cities__right-section">

                <Map points={cityOffers}/>

              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

MainPage.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: offersTypes,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onLoadOffers: PropTypes.func,
  sortKey: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  sortKey: state.sortKey,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers: () => dispatch(fetchOffers())
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
