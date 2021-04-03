import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";

import { loginUrl } from "../../config/spotify";
import Toast from "./Toast/Toast";
import Login from "./Login/Login";

const HomePage = ({ isValidSession, location }) => {
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  const handleLogin = () => (window.location = loginUrl);

  return (
    <Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <Container fixed>
          {sessionExpired && <Toast open={true} />}
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
