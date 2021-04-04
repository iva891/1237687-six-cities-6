import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

const App = ({cities}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            cities = {cities}
          />
        </Route>
        <Route path="/login" exact >
          <SignIn />
        </Route>
        <PrivateRoute exact
          path="/favorites"
          component={ ()=>(<Favorites />) }
        >
        </PrivateRoute>
        <Route path="/offer/:id" component={Room} exact>
        </Route>
        <Route path="/404" exact >
          <NotFound />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
