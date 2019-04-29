import React from "react";
import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const ToolbarLink = props => {
  return (
    <NavLink activeClassName="active" {...props}>
      {props.children}
    </NavLink>
  );
};

ToolbarLink.propTypes = {
  children: PropTypes.string.isRequired
}

export default ToolbarLink;