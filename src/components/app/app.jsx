import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import {offersTypes} from '../../types/types';

const App = ({numbers, offers, cities}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            numbers = {numbers}
            offers = {offers}
            cities = {cities}
          />
        </Route>
        <Route path="/login" exact >
          <SignIn />
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            offers = {offers}
          />
        </Route>
        <Route path="/offer/:id" exact>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: offersTypes,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
