import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { isValidSession } from "../common/Spotify/SpotifyAuth";

/**
 * @typedef {Object} Components-Props
 * @property {function} component - The component to render
 * @property {...rest} rest - The rest of the props for the route
 */

/**
 * GuardedRoute
 * Is a replacement for the  Route component provided
 * but allows to guard the routes with a validation function.
 *
 * @param {Components-Props}
 */
const GuardedRoute = ({ component, ...rest }) => {
  return isValidSession() ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

GuardedRoute.propTypes = {
  /**
   * Component to render
   */
  component: PropTypes.func
};

GuardedRoute.defaultProps = {
  component: () => null
};

export default GuardedRoute;
