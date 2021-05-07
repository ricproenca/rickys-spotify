import React, { Fragment } from "react";
import { Link } from "react-router-dom";

/**
 * Not found page (not used for now)
 */
const NotFoundPage = () => {
  return (
    <Fragment>
      Page not found. Goto <Link to="/dashboard">Home Page</Link>
    </Fragment>
  );
};

export default NotFoundPage;
