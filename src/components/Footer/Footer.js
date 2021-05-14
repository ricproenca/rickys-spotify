import React from "react";
import { Box, Grid, Slider } from "@material-ui/core";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown
} from "@material-ui/icons";

import footerStyles from "./Footer.styles";

function Footer() {
  const classes = footerStyles();

  return (
    <Box className={classes.footer}>
      <Box className={classes.footer__left}>
        <img
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
          className={classes.footer__albumLogo}
        />
        <Box className={classes.footer__songInfo}>
          <h4>My fav song</h4>
          <p>Atharva</p>
        </Box>
      </Box>
      <Box className={classes.footer__center}>
        <Shuffle className={classes.footer__green} />
        <SkipPrevious className={classes.footer__icon} />
        <PlayCircleOutline fontSize="large" className={classes.footer__icon} />
        <SkipNext className={classes.footer__icon} />
        <Repeat className={classes.footer__green} />
      </Box>
      <Box className={classes.footer__right}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
