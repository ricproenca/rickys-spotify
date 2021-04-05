import { SPOTIFY_SET_TOKEN } from "./SpotifyActionTypes";

export const setSpotifyToken = (params) => {
  console.log("🚀 ~ setSpotifyToken", params);
  return {
    type: SPOTIFY_SET_TOKEN,
    payload: {
      token: params
    }
  };
};
