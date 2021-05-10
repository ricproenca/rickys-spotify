import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { getUserPlaylists } from "common/Spotify/SpotifyActionCreator";
import SidebarOption from "./SidebarOption";

import sideBarStyles from "./Sidebar.styles";

const Sidebar = () => {
  const classes = sideBarStyles();
  const dispatch = useDispatch();

  // const playlists = useSelector((state) => state.spotify.playlists);

  // useEffect(() => {
  //   dispatch(getUserPlaylists());
  // });

  const playlists = [];

  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className={classes.sidebar__title}>PLAYLISTS</strong>
      <hr className={classes.sidebarHr} />
      {playlists?.items?.map((playlist, index) => (
        <SidebarOption key={index} title={playlist.name} />
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  spotifyApi: PropTypes.object
};

Sidebar.defaultProps = {
  spotifyApi: null
};

export default Sidebar;
