import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";

import { isValidSession } from "../../common/Spotify/SpotifyAuth";
import { loginUrl } from "../../config/spotify";
import Login from "../../components/Login/Login";

/**
 * Check if the user has a valid session and redirect to the proper route
 * dashboard: in case of a valid session
 * login: in case of a non valid session
 */
const HomePage = () => {
  const handleLogin = () => (window.location = loginUrl);

  return (
    <Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <Container fixed>
          <Login handleLogin={handleLogin} />
        </Container>
      )}
    </Fragment>
  );
};

export default HomePage;
