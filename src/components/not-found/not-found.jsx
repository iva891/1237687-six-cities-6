import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to="/" className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
          </div>
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content" style={{background: `none`}}>
                  <b className="cities__status">404</b>
                  <b className="cities__status">Page not found</b>
                  <p className="cities_123_status-description">
                    <Link to="/">Go back to the main page</Link>
                  </p>
                </div>
              </section>
              <div className="cities__right-section" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFound;
