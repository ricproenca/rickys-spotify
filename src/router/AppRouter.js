import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import RedirectPage from "../components/RedirectPage/RedirectPage";
import DashboardPage from "../components/DashboardPage/DashboardPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

import GuardedRoute from "./GuardedRoute";
import DecisionRoute from "./DecisionRoute";

import { isValidSession } from "../common/Spotify/SpotifyAuth";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/redirect" component={RedirectPage} />
        <GuardedRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
