import React from "react";
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

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
  username: state.auth.username
});

export default connect(mapStateToProps)(PrivateRoute);