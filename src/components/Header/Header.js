import React, {Component} from "react";
import ToolbarLink from "./ToolbarLink/ToolbarLink";

import { connect } from "react-redux";

import { logout } from "../../store/actions/authActions";

import "./Header.css";

class Header extends Component {
  onLogoutHandler = () => {
    this.props.logout();
  };

  render() {
    return (
      <ul>
        <li>
          <ToolbarLink exact to="/">
            Home
          </ToolbarLink>
        </li>
        <li>
          <ToolbarLink to="/news">News</ToolbarLink>
        </li>
        <li>
          <ToolbarLink to="/profile">Profile</ToolbarLink>
        </li>
        <li>
        {this.props.isLogged ?
           (
              <ToolbarLink to="/login" onClick={this.onLogoutHandler}>
                Logot
              </ToolbarLink>
            ) : (
              <ToolbarLink to="/login">Login</ToolbarLink>
            )}
        </li>
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    isLogged: state.auth.isLogged
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);