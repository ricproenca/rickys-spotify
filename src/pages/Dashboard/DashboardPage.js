import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getAccessTokenParams, setAccessToken } from "common/Spotify/SpotifyAuth";
import { setSpotifyToken } from "common/Spotify/SpotifyActionCreator";
import loadSpotifyWebPlayer from "common/Spotify/SpotifyWebPlayer";

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
      await loadSpotifyWebPlayer();
      setLoaded(true);
    })();
  }, []);

  return loaded ? <Player /> : null;
};

export default DashboardPage;
