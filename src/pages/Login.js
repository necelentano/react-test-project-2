import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

import { login } from "../store/actions/authActions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = e => {
    const {target: {value, name}} = e;
    this.setState({ [name]: value });
  };
  
  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { isLogged, isLoginFail} = this.props;
    const LoggedInRedirect = <Redirect to="/profile" />;

    const LoggedInFail = (
      <div>
        <h2 style={{ color: "red" }}>Incorrect username or password.</h2>
      </div>
    );

    return isLogged ? LoggedInRedirect : (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="User Name"
          name="username"
          value={this.state.user}
          onChange={this.onChangeHandler}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
        />

        <button type="submit">Login</button>
        {isLoginFail && LoggedInFail}
      </form>
    );
  }
}

Login.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLoginFail: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    isLogged: state.auth.isLogged,
    isLoginFail: state.auth.isLoginFail
  }
}
export default connect(mapStateToProps, { login })(Login);
