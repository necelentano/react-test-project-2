import React from "react";

const Profile = props => {
    return (
      <div>
        <h2>Profile Page</h2>
        <h2>Username: {props.username}</h2>
      </div>
    );
  };

  export default Profile;