import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";

import { isValidSession } from "../../common/Spotify/SpotifyAuth";
import { loginUrl } from "../../config/spotify";
import Login from "./Login/Login";

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

HomePage.propTypes = {
  isValidSession: PropTypes.func,
  location: PropTypes.object
};

HomePage.defaultProps = {
  sessionExpired: true,
  location: PropTypes.object
};

export default HomePage;
