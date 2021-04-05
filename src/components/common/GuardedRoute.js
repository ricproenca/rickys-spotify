import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ Component, auth, ...routeProps }) => {
  console.log("auth:" + auth);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

GuardedRoute.propTypes = {
  Component: PropTypes.element,
  auth: PropTypes.bool
};

GuardedRoute.defaultProps = {
  Component: <div></div>,
  auth: false
};

export default GuardedRoute;
