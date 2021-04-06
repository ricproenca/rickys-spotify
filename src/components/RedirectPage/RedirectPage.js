import { useEffect } from "react";
import PropTypes from "prop-types";
import { getParamValues } from "../../utils/utils";
import { setAccessTokenParams } from "../../common/Spotify/SpotifyAuth";

const RedirectPage = ({ history, location }) => {
  console.log("🚀 ~ RedirectPage ~ history, location", history, location);
  useEffect(() => {
    if (!location.hash) {
      return history.push("/");
    }

    const urlParams = getParamValues(location.hash);
    const { access_token, expires_in, token_type } = urlParams;

    const expiryTime = new Date().getTime() + urlParams.expires_in * 1000;

    setAccessTokenParams(access_token, expires_in, token_type, expiryTime);

    // setExpiryTime(expiryTime);

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
