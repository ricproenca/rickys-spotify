import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import { getParamValues } from "../../utils/utils";

const RedirectPage = (props) => {
  useEffect(() => {
    const { setExpiryTime, history, location } = props;

    if (!location.hash) {
      return history.push("/");
    }

    const accessToken = getParamValues(location.hash);
    const expiryTime = new Date().getTime() + accessToken.expires_in * 1000;

    localStorage.setItem("params", JSON.stringify(accessToken));
    localStorage.setItem("expiry_time", expiryTime);

    setExpiryTime(expiryTime);

    history.push("/dashboard");
  });

  return null;
};

RedirectPage.propTypes = {
  setExpiryTime: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object
};

RedirectPage.defaultProps = {
  setExpiryTime: () => {},
  history: {},
  location: {}
};

export default RedirectPage;
