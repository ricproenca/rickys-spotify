import React from "react";
import PropTypes from "prop-types";

import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";

import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";

import sideBarStyles from "./Body.styles";

const Body = ({ discoverWeeklyPlaylist }) => {
  const classes = sideBarStyles();

  if (!discoverWeeklyPlaylist.images) {
    return null;
  }

  return (
    <div className={classes.body}>
      <Header />
      <div className={classes.body__info}>
        <img src={discoverWeeklyPlaylist?.images[0]?.url} alt="" />
        <div className={classes.body__infoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeeklyPlaylist?.description}</p>
        </div>
      </div>
      <div className={classes.body__songs}>
        <div className={classes.body__icons}>
          <PlayCircleFilled className={classes.body__shuffle} />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discoverWeeklyPlaylist?.tracks.items.map((item, index) => (
          <SongRow key={`${item.track.name}-${index}`} track={item.track} />
        ))}
      </div>
    </div>
  );
};

Body.propTypes = {
  discoverWeeklyPlaylist: PropTypes.object
};

Body.defaultProps = {
  discoverWeeklyPlaylist: null
};

export default Body;
