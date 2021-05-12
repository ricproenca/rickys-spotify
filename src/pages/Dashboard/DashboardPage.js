import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";

import { getAccessTokenParams } from "common/Spotify/SpotifyAuth";
import { setSpotifyToken, getUserPlaylists } from "common/Spotify/SpotifyActionCreator";

import Sidebar from "../../components/Player/SideBar/Sidebar";
/**
 * Dashboard Page
 */
const DashboardPage = () => {
  const dispatch = useDispatch();

  // set spotify api access token
  const spotifyApi = new SpotifyWebApi();
  const { access_token, expires_in, token_type, expiry_time } = getAccessTokenParams();
  spotifyApi.setAccessToken(access_token);

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

  useEffect(() => {
    dispatch(getUserPlaylists({ spotifyApi }));
  }, []);

  return (
    <Fragment>
      <Sidebar />
    </Fragment>
  );
};

export default DashboardPage;

// const me = await spotifyApi.getMe();
// console.log("🚀 ~ spotify.getMe", me);
// const getUserPlaylists = await spotifyApi.getUserPlaylists();
// console.log("🚀 ~ spotifyApi.getUserPlaylists", getUserPlaylists);
// const getMySavedTracks = await spotifyApi.getMySavedTracks();
// console.log("🚀 ~ spotifyApi.getMySavedTracks", getMySavedTracks);
// const getMySavedAlbums = await spotifyApi.getMySavedAlbums();
// console.log("🚀 ~ spotifyApi.getMySavedAlbums", getMySavedAlbums);
// const getMyTopArtists = await spotifyApi.getMyTopArtists();
// console.log("🚀 ~ spotifyApi.getMyTopArtists", getMyTopArtists);
// const getMyTopTracks = await spotifyApi.getMyTopTracks();
// console.log("🚀 ~ spotifyApi.getMyTopTracks", getMyTopTracks);
// const getMyRecentlyPlayedTracks = await spotifyApi.getMyRecentlyPlayedTracks();
// console.log("🚀 ~ spotifyApi.getMyRecentlyPlayedTracks", getMyRecentlyPlayedTracks);
