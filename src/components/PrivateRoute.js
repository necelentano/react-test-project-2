import React from "react";
import PropTypes from 'prop-types';

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogged === true ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
  username: state.auth.username
});

export default connect(mapStateToProps)(PrivateRoute);