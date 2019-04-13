import React, { Component } from "react";

class Login extends Component {
  state = {
    user: "",
    password: ""
  };

  onChangeHandler = e => {
    const {target: {value, name}} = e;
    this.setState({ [name]: value });
  };
  
  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.user === "Admin" &&
      this.state.password === "12345"
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
          name="user"
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
export default Login;
