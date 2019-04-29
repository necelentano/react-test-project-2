import React from "react";
import PropTypes from 'prop-types';

const Profile = props => {
    return (
      <div>
        <h2>Profile Page</h2>
        <h2>Username: {props.username}</h2>
      </div>
    );
  };

Profile.propTypes = {
  username: PropTypes.string.isRequired
}

export default Profile;