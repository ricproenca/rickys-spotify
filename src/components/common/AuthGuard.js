import React from "react";
import { Redirect } from "react-router-dom";

const AuthGuard = (Component) => {
  () => {
    return localStorage.getItem("token") ? (
      <Component />
    ) : (
      <Redirect to="/login" />
    );
  };
};

export default AuthGuard;
