import React, { Component } from "react";
import { connect } from "react-redux";

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
    const isLogged = this.props.isLogged;
    const LoggedInElement = (
      <div>
        <h2>You are logged in.</h2>
        <h2>Username: {this.props.username}</h2>
      </div>
    );

    return isLogged ? LoggedInElement : (
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
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.auth.isLogged,
    username: state.auth.username
  }
}
export default connect(mapStateToProps, { login })(Login);
