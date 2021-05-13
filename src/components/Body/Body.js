import React from "react";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";

import Header from "../Header/Header";
// import SongRow from "./SongRow";
import sideBarStyles from "./Body.styles";

const Body = () => {
  const classes = sideBarStyles();

  return (
    <div className={classes.body}>
      <Header />
      <div className={classes.body__info}>
        {/* <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className={classes.body__infoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div> */}
      </div>
      {/* <div className={classes.body__songs}>
        <div className={classes.body__icons}>
          <PlayCircleFilled className={classes.body__shuffle} />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}
      </div> */}
    </div>
  );
};

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
