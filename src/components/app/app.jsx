import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  return (
    <MainPage {...props} />
  );
};

App.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  quantity: PropTypes.number.isRequired
};

export default App;
