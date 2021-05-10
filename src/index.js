import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "config/theme";
import store from "store/store";
import AppRouter from "router/AppRouter";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

/**
 * Entry point of the App.
 *
 * <Provider>
 * Component that makes the Redux store available to any nested components
 * that need to access the Redux store.
 *
 * <ThemeProvider>
 * Component that allows to customize Material-Ui theme
 * in order to inject a theme into your application
 *
 * <CssBaseline>
 * Component to kickstart an elegant, consistent, and simple baseline to build upon.
 * It's basically the same as normalize.css
 *
 * <AppRouter>
 * Routing configuration based on React Router, the standard routing library for React.
 */
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
