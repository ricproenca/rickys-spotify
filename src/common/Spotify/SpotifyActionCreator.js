import { SPOTIFY_SET_TOKEN } from "./SpotifyActionTypes";

export const setSpotifyToken = ({
  accessToken,
  expiresIn,
  tokenType,
  expirationTime
}) => {
  console.log(
    "🚀 ~ setSpotifyToken",
    accessToken,
    expiresIn,
    tokenType,
    expirationTime
  );
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
