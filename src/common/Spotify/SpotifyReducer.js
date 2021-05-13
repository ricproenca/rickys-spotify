import { SPOTIFY_SET_TOKEN, SPOTIFY_GET_USER_PLAYLISTS } from "./SpotifyActionTypes";

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
  }
};

const SpotifyReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SPOTIFY_SET_TOKEN:
      console.log("🚀 ~ SPOTIFY_SET_TOKEN", payload);
      const { accessToken, expiresIn, tokenType, expirationTime } = payload;
      return { ...state, accessToken, expiresIn, tokenType, expirationTime };

    case SPOTIFY_GET_USER_PLAYLISTS:
      console.log("🚀 ~ SPOTIFY_GET_USER_PLAYLISTS", payload);
      return { ...state, userPlaylists: payload };
    default:
      return state;
  }
};

export default SpotifyReducer;
