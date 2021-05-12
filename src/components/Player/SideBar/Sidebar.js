import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import SidebarOption from "./SidebarOption";
import sideBarStyles from "./Sidebar.styles";

const Sidebar = () => {
  const classes = sideBarStyles();

  const userPlaylists = useSelector(state => state.spotify.userPlaylists);
  const { total, items } = userPlaylists;

  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src="./assets/player/logo_black_white.png"
        alt="Spotify logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className={classes.sidebar__title}>{`PLAYLISTS (${total})`}</strong>
      <hr className={classes.sidebarHr} />
      {items?.map((playlist, index) => (
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
