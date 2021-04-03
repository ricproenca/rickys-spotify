import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Fragment>
      Page not found. Goto <Link to="/dashboard">Home Page</Link>
    </Fragment>
  );
};

export default NotFoundPage;
