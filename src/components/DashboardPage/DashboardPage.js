import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const DashboardPage = ({ isValidSession }) => {
  console.log("🚀 ~ DashboardPage");
  console.log("isValidSession", isValidSession());

  return (
    <Fragment>
      {isValidSession() ? (
        <Fragment>Dashboard Page </Fragment>
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
};

DashboardPage.propTypes = {
  isValidSession: PropTypes.func
};

DashboardPage.defaultProps = {
  sessionExpired: true
};

export default DashboardPage;
