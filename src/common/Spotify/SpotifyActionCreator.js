import { SPOTIFY_SET_TOKEN, SPOTIFY_GET_USER_PLAYLISTS } from "./SpotifyActionTypes";
import { spotifyApi } from "./SpotifyAuth";

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

export const getUserPlaylists = () => {
  return async dispatch => {
    const response = await spotifyApi.getUserPlaylists();
    return dispatch({ type: SPOTIFY_GET_USER_PLAYLISTS, payload: response });
  };
};
