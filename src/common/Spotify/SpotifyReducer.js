import { SPOTIFY_SET_TOKEN } from "./SpotifyActionTypes";

export const initialState = {
  accessToken: "",
  expiresIn: 0,
  tokenType: "",
  expirationTime: 0,
  userPlaylists: []
};

const SpotifyReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SPOTIFY_SET_TOKEN:
      const { accessToken, expiresIn, tokenType, expirationTime } = payload;
      return { ...state, accessToken, expiresIn, tokenType, expirationTime };
    default:
      return state;
  }
};

export default SpotifyReducer;
