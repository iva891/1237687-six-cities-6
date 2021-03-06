import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import {offersTypes} from '../../types/types';
import {connect} from 'react-redux';
import {fetchOffers} from "../../store/api-actions";

const App = ({numbers, offers, cities, isDataLoad, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoad) {
      onLoadData();
    }
  }, [isDataLoad]);

  if (!isDataLoad) {
    return (
      <LoadingScreen />
    );
  }

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
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDataLoad: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  isDataLoad: state.isDataLoad,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
