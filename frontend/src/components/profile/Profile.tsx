import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <br />
        <img src={user?.picture} alt={user?.name} />

        <h2>username: {user?.name}</h2>
        <p>user email: {user?.email}</p>
      </div>
    );
  } else {
    return (
      <p>You need to login!</p>
    );
  }
};

export default Profile;
