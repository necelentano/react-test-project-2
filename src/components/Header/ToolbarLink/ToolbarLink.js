import React from "react";
import { NavLink } from "react-router-dom";

const ToolbarLink = props => {
  return (
    <NavLink activeClassName="active" {...props}>
      {props.children}
    </NavLink>
  );
};

export default ToolbarLink;