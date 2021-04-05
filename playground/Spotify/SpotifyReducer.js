import { SPOTIFY_SET_TOKEN } from "./SpotifyActionTypes";

export const initialState = { token: null };

const SpotifyReducer = (state = initialState, action) => {
  console.log("🚀 ~ SpotifyReducer", action);
  switch (action.type) {
    case SPOTIFY_SET_TOKEN:
      const { token } = action.payload;
      return { ...state, token };

    default:
      return state;
  }
};

export default SpotifyReducer;
