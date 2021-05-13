import {
  SPOTIFY_SET_TOKEN,
  SPOTIFY_GET_USER_PLAYLISTS,
  SPOTIFY_GET_DISCOVER_WEEKLY_PLAYLIST
} from "./SpotifyActionTypes";
import { spotifyApi } from "./SpotifyAuth";

/**
 * @typedef {Object} Action
 * @property {string} type - The name of the action
 * @property {*} payload - The data we want to pass to reducer
 */

const DISCOVER_WEEKLY_ID = "37i9dQZEVXcRxWciCK0OoV";

/**
 * Sets the spotify token
 *
 * @param {string} accessToken - access token
 * @param {string} expiresIn - expires in
 * @param {string} tokenType - token type
 * @param {string} expirationTime - expiration time
 * @returns
 */
export const setSpotifyToken = ({ accessToken, expiresIn, tokenType, expirationTime }) => {
  return {
    type: SPOTIFY_SET_TOKEN,
    payload: {
      accessToken,
      expiresIn,
      tokenType,
      expirationTime
    }
  };
};

/**
 * Gets the current user playlists
 *
 * @returns
 */
export const getUserPlaylists = () => {
  return async dispatch => {
    const response = await spotifyApi.getUserPlaylists();
    return dispatch({ type: SPOTIFY_GET_USER_PLAYLISTS, payload: response });
  };
};

/**
 * Gets a spotify playlist by spotify Id
 *
 * @param {string} spotifyId - The spotify ID for the playlist.
 * @returns {Action}
 */
export const getPlaylist = (spotifyId = DISCOVER_WEEKLY_ID) => {
  return async dispatch => {
    const response = await spotifyApi.getPlaylist(spotifyId);
    return dispatch({ type: SPOTIFY_GET_DISCOVER_WEEKLY_PLAYLIST, payload: response });
  };
};
