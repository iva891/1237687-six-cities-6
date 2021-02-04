import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {numbers, quantity} = props;
  return (
    <MainPage numbers={numbers} quantity = {quantity} />
  );
};

App.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  quantity: PropTypes.number.isRequired
};

export default App;
