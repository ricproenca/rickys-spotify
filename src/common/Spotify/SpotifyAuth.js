import SpotifyWebApi from "spotify-web-api-js";

/**
 * @typedef {Object} SpotifySessionParams
 * @property {string} access_token - The session token
 * @property {string} expires_in - The session expiration time
 * @property {string} token_type - The session token type
 * @property {string} expiry_time - The time when the session will expire
 */

/**
 * Spotify Web API instance
 */
export const spotifyApi = new SpotifyWebApi();

/**
 * Saves the session params in local storage
 *
 * @param {SpotifySessionParams}
 */
export const persistAccessTokenParams = ({ access_token, expires_in, token_type, expiry_time }) => {
  try {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("expires_in", expires_in);
    localStorage.setItem("token_type", token_type);
    localStorage.setItem("expiry_time", expiry_time);
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Gets the session params from local storage
 *
 * @returns {SpotifySessionParams}
 */
export const getAccessTokenParams = () => {
  try {
    return {
      access_token: localStorage.getItem("access_token"),
      expires_in: localStorage.getItem("expires_in"),
      token_type: localStorage.getItem("token_type"),
      expiry_time: localStorage.getItem("expiry_time")
    };
  } catch (err) {
    return null;
  }
};

/**
 * Checks is the current session is valid
 * @returns {boolean}
 */
export const isValidSession = () => {
  try {
    const currentTime = new Date().getTime();
    const expirationTime = localStorage.getItem("expiry_time");
    const isSessionValid = currentTime < expirationTime;

    return isSessionValid;
  } catch (err) {
    return false;
  }
};

/**
 * Sets the access token to be able to do requests to Spotify API
 */
export const setAccessToken = () => {
  const { access_token } = getAccessTokenParams();
  spotifyApi.setAccessToken(access_token);
};
