import { useEffect } from "react";
import PropTypes from "prop-types";

import { getParamValues } from "../../utils/utils";
import { persistAccessTokenParams } from "../../common/Spotify/SpotifyAuth";

/**
 * Spotify redirect page
 */
const RedirectPage = ({ history, location }) => {
  useEffect(() => {
    if (!location.hash) {
      return history.push("/");
    }

    const urlParams = getParamValues(location.hash);
    const { access_token, expires_in, token_type } = urlParams;
    const expiry_time = new Date().getTime() + urlParams.expires_in * 1000;

    persistAccessTokenParams({
      access_token,
      expires_in,
      token_type,
      expiry_time
    });

    history.push("/dashboard");
  });

  return null;
};

RedirectPage.propTypes = {
  /**
   * A history object to use for navigation.
   */
  history: PropTypes.object,
  /**
   * Get the current page address (URL)
   */
  location: PropTypes.object
};

RedirectPage.defaultProps = {
  history: {},
  location: {}
};

export default RedirectPage;
