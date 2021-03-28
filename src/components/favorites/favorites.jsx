import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import FavoritesLocation from '../favorites-locations/favorites-location';
import {connect} from 'react-redux';
import {fetchFavorites} from "../../store/api-actions";
import Header from '../header/header';
import {Link} from 'react-router-dom';

const Favorites = (props) => {
  const {favorites, onLoadFavorites} = props;
  const cities = favorites.map((card) => card.city.name);
  const unicCities = cities.filter((city, i) => cities.indexOf(city) === i);

  useEffect(() => {
    onLoadFavorites();
  }, []);


  return (
    <div className="page">
      <Header />
      {favorites.length === 0 ?
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main> :
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
      }
      <footer className="footer container">
        <Link to="/" className="footer__logo-link" >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
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
