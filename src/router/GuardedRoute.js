import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { isValidSession } from "../common/Spotify/SpotifyAuth";

const GuardedRoute = ({ component, ...rest }) => {
  console.log("🚀 ~ GuardedRoute ~ GuardedRoute", GuardedRoute);

  return isValidSession() ? (
    <Route {...rest} render={component} />
  ) : (
    <Redirect to="/" />
  );
};

GuardedRoute.propTypes = {
  component: PropTypes.func
};

GuardedRoute.defaultProps = {
  component: () => {}
};

export default GuardedRoute;
