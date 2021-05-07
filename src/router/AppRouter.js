import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import RedirectPage from "../components/RedirectPage/RedirectPage";
import DashboardPage from "../components/DashboardPage/DashboardPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

import GuardedRoute from "./GuardedRoute";

/**
 * BrowserRouter
 * A <Router> that uses the HTML5 history API
 * (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
 *
 * Switch
 * Renders the first child <Route> or <Redirect> that matches the location.
 * It renders a route exclusively.
 *
 * Route
 * Renders some UI when it's path matches the current URL.
 *
 * GuardedRoute
 * Is a replacement for the  Route component provided
 * but allows to guard the routes with a validation function.
 */
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
