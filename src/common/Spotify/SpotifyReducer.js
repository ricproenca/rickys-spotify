import { SPOTIFY_SET_TOKEN } from "./SpotifyActionTypes";

export const initialState = {
  accessToken: "",
  expiresIn: 0,
  tokenType: "",
  expirationTime: 0
};

const SpotifyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("🚀 ~ SpotifyReducer", type, payload);

  switch (action.type) {
    case SPOTIFY_SET_TOKEN:
      const { accessToken, expiresIn, tokenType, expirationTime } = payload;
      return { ...state, accessToken, expiresIn, tokenType, expirationTime };

    default:
      return state;
  }
};

export default SpotifyReducer;
