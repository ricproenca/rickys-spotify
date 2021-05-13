import React from "react";
import PropTypes from "prop-types";

import { Box } from "@material-ui/core";

import SongRowStyles from "./SongRow.styles";

const SongRow = ({ track }) => {
  const classes = SongRowStyles();

  if (!track.album) {
    return null;
  }

  return (
    <Box className={classes.songRow}>
      <img src={track.album.images[0].url} alt="Album Cover" className={classes.songRow__album} />
      <Box className={classes.songRow__info}>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map(artist => artist.name).join(", ")} - {track.album.name}
        </p>
      </Box>
    </Box>
  );
};

SongRow.propTypes = {
  track: PropTypes.object
};

SongRow.defaultProps = {
  track: {}
};

export default SongRow;
