import React from "react";
import PropTypes from "prop-types";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import SidebarOption from "./SidebarOption";
import sideBarStyles from "./Sidebar.styles";

const Sidebar = ({ userPlaylists }) => {
  const classes = sideBarStyles();

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
      <div className={classes.sidebar__title}>
        <strong>{`PLAYLISTS (${total})`}</strong>
        <hr className={classes.sidebarHr} />
      </div>
      <div>
        {items?.map((playlist, index) => (
          <SidebarOption key={index} title={playlist.name} />
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  userPlaylists: PropTypes.shape({
    href: PropTypes.string,
    items: PropTypes.array,
    limit: PropTypes.number,
    next: PropTypes.string,
    offset: PropTypes.number,
    previous: PropTypes.string,
    total: PropTypes.number
  })
};

Sidebar.defaultProps = {
  userPlaylists: {
    href: "",
    items: [],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 0
  }
};

export default Sidebar;
