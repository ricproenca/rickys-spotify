import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getAccessTokenParams, setAccessToken } from "common/Spotify/SpotifyAuth";
import { setSpotifyToken } from "common/Spotify/SpotifyActionCreator";
import { getSpotifyPlayer, play } from "common/Spotify/SpotifyWebPlayer";

import Player from "../../components/App/App";

/**
 * Dashboard Page
 */
const DashboardPage = () => {
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);

  // set spotify api access token
  const { access_token, expires_in, token_type, expiry_time } = getAccessTokenParams();
  setAccessToken();

  // * do we need to save spotify auth to redux state?
  useEffect(() => {
    dispatch(
      setSpotifyToken({
        accessToken: access_token,
        expiresIn: expires_in,
        tokenType: token_type,
        expirationTime: expiry_time
      })
    );
  }, []);

  useEffect(async () => {
    (async () => {
      const player = await getSpotifyPlayer();
      console.log("🚀 ~ player", player);

      // setTimeout(() => {
      //   console.log("Play!");
      //   play({
      //     playerInstance: player,
      //     spotifyUri: "spotify:track:7xGfFoTpQ2E7fRF5lN10tr"
      //   });
      // }, 2000);

      setLoaded(true);
    })();
  }, []);

  return loaded ? <Player /> : null;
};

export default DashboardPage;
