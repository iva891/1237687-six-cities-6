import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, authorizationStatus, ...rest}) => (
  <Route
    {...rest}
    render={(props) => (
      authorizationStatus === false)
      ? <Redirect to={`/login`} />
      : <Component {...props} />
    }
  />
);

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.bool,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func,
  component: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
