import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";

import { getUserPlaylists, getPlaylist, getUserDetails } from "common/Spotify/SpotifyActionCreator";

import Sidebar from "../SideBar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

import AppStyles from "./App.styles";

/**
 * Player Page
 */
const App = () => {
  const classes = AppStyles();
  const dispatch = useDispatch();

  const userPlaylists = useSelector(state => state.spotify.userPlaylists);
  const discoverWeeklyPlaylist = useSelector(state => state.spotify.discoverWeeklyPlaylist);
  const user = useSelector(state => state.spotify.user);

  useEffect(() => dispatch(getUserPlaylists()), []);
  useEffect(() => dispatch(getPlaylist()), []);
  useEffect(() => dispatch(getUserDetails()), []);

  return (
    <Box className={classes.player}>
      <Box className={classes.player__body}>
        <Sidebar userPlaylists={userPlaylists} />
        <Body discoverWeeklyPlaylist={discoverWeeklyPlaylist} user={user} />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;

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
