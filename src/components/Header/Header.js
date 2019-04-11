import React from "react";
import ToolbarLink from "./ToolbarLink/ToolbarLink";

import "./Header.css";

const Header = () => {
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
        <ToolbarLink to="/login">Login</ToolbarLink>
      </li>
    </ul>
  );
};

export default Header;