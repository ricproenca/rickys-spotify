import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const DashboardPage = ({ isValidSession }) => {
  const RedirectHome = () => {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            session_expired: true
          }
        }}
      />
    );
  };

  const renderDashboard = () => <Fragment>DashboardPage</Fragment>;

  return isValidSession() ? renderDashboard() : RedirectHome();
};

export default DashboardPage;
