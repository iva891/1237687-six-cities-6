import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import FavoritesLocation from '../favorites-locations/favorites-location';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchFavorites} from "../../store/api-actions";

const Favorites = (props) => {
  const {favorites, onLoadFavorites} = props;
  const cities = favorites.map((card) => card.city.name);
  const unicCities = cities.filter((city, i) => cities.indexOf(city) === i);

  useEffect(() => {
    if (favorites.length === 0) {
      onLoadFavorites();
    }
  }, [favorites, onLoadFavorites]);

  if (favorites.length === 0) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {unicCities.map((city) =>
                <FavoritesLocation key={city} city={city} favorites={favorites} />
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favorites: offersTypes,
  onLoadFavorites: PropTypes.func
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => dispatch(fetchFavorites())
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
