import React, { useEffect, useState } from 'react';
import LoginButton from './components/button/LoginButton';
import LogoutButton from './components/button/LogoutButton';
import Profile from './components/profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationContext from './components/utils/auth';
import DebugButton from './components/button/DebugButton';

function App() {
  const { user, isAuthenticated, getAccessTokenWithPopup } = useAuth0();
  const [ accessToken, setAccessToken ] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;

      getAccessTokenWithPopup({
        authorizationParams: {
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        },
      })
        .then((accessToken) => {
          setAccessToken(accessToken || "");
        })
        .catch((err) => console.log(err))
    }
  }, [getAccessTokenWithPopup, isAuthenticated, setAccessToken, user?.sub]);

  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <LogoutButton />
        <AuthenticationContext.Provider value={
          {accessToken: accessToken, isAuthenticated: isAuthenticated, userId: user?.sub || ""}
        }>
          <DebugButton />
        </AuthenticationContext.Provider>
        <Profile />
      </header>
    </div>
  );
}

export default App;
