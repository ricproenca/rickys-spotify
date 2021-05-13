import {
  SPOTIFY_SET_TOKEN,
  SPOTIFY_GET_USER_PLAYLISTS,
  SPOTIFY_GET_DISCOVER_WEEKLY_PLAYLIST
} from "./SpotifyActionTypes";

/**
 * @typedef {Object} Action
 * @property {string} type - The name of the action
 * @property {*} payload - The data we want to pass to reducer
 */

export const initialState = {
  accessToken: "",
  expiresIn: 0,
  tokenType: "",
  expirationTime: 0,
  userPlaylists: {
    href: "",
    items: [],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 0
  },
  discoverWeeklyPlaylist: {}
};

/**
 *
 * @param {object} state - the state to be modified
 * @param {Action}
 * @returns {object}
 */
const SpotifyReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SPOTIFY_SET_TOKEN:
      console.log("🚀 ~ SPOTIFY_SET_TOKEN", payload);
      const { accessToken, expiresIn, tokenType, expirationTime } = payload;
      return { ...state, accessToken, expiresIn, tokenType, expirationTime };

    case SPOTIFY_GET_USER_PLAYLISTS:
      console.log("🚀 ~ SPOTIFY_GET_USER_PLAYLISTS", payload);
      return { ...state, userPlaylists: payload };

    case SPOTIFY_GET_DISCOVER_WEEKLY_PLAYLIST:
      console.log("🚀 ~ SPOTIFY_GET_DISCOVER_WEEKLY_PLAYLIST", payload);
      return { ...state, discoverWeeklyPlaylist: payload };

    default:
      return state;
  }
};

export default SpotifyReducer;
