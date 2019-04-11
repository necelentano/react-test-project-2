import React, { Component } from "react";

class Login extends Component {
  state = {
    userValue: "",
    passwordValue: ""
  };
  onUserChangeHandler = e => {
    this.setState({ userValue: e.target.value });
  };
  onPasswordChangeHandler = e => {
    this.setState({ passwordValue: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.userValue === "Admin" &&
      this.state.passwordValue === "12345"
    ) {
      localStorage.setItem("isAdmin", true);
    } else {
      localStorage.setItem("isAdmin", false);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="User Name"
          value={this.state.userValue}
          onChange={this.onUserChangeHandler}
        />

        <input
          type="password"
          placeholder="Password"
          value={this.state.passwordValue}
          onChange={this.onPasswordChangeHandler}
        />

        <button type="submit">Login</button>
      </form>
    );
  }
}
export default Login;
