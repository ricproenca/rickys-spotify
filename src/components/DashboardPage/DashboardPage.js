import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { isValidSession } from "../../common/Spotify/SpotifyAuth";

const DashboardPage = () => {
  console.log("🚀 ~ DashboardPage");

  return <Fragment>Dashboard Page </Fragment>;
};

DashboardPage.propTypes = {
  isValidSession: PropTypes.func
};

DashboardPage.defaultProps = {
  sessionExpired: true
};

export default DashboardPage;
