import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import RedirectPage from "../components/RedirectPage/RedirectPage";
import DashboardPage from "../components/DashboardPage/DashboardPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
const AppRouter = () => {
  const [expirationTime, setExpirationTime] = useState("0");

  const isValidSession = () => {
    const currentTime = new Date().getTime();
    const isSessionValid = currentTime < expirationTime;

    return isSessionValid;
  };

  const setExpiryTimeHandler = (expiryTime) => setExpirationTime(expiryTime);

  useEffect(() => {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem("expiry_time"));
    } catch (error) {
      expiryTime = "0";
    }

    setExpirationTime(expiryTime);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={(props) => (
            <HomePage isValidSession={isValidSession} {...props} />
          )}
        />
        <Route
          path="/redirect"
          render={(props) => (
            <RedirectPage
              isValidSession={isValidSession}
              setExpiryTime={setExpiryTimeHandler}
              {...props}
            />
          )}
        />
        <Route
          path="/dashboard"
          render={(props) => (
            <DashboardPage isValidSession={isValidSession} {...props} />
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
