import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import { Button, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import spotifyLogo from "../../assets/spotify/logos/Spotify_Logo_RGB_Green.png"; // Tell webpack this JS file uses this image
import loginStyles from "./Login.styles";

/**
 * Login page
 */
const Login = ({ handleLogin }) => {
  const classes = loginStyles();

  return (
    <Box className={classes.Container}>
      <Box className={classes.Box}>
        <img className={classes.Logo} src={spotifyLogo} alt="Spotify Logo" />
      </Box>
      <Box className={classes.Box}>
        <Button className={classes.LoginButton} display="block" onClick={handleLogin}>
          Login to Rickys spotify
        </Button>
      </Box>
      <Typography className={classes.Message} display="block" gutterBottom>
        Not another spotify clone...
      </Typography>
      <Typography className={classes.Link} display="block" gutterBottom>
        <Link href="https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#">
          Get Your Web Playback SDK Access Token
        </Link>
      </Typography>
    </Box>
  );
};

Login.propTypes = {
  /**
   * Function that holds the validation of the login url
   */
  handleLogin: PropTypes.func
};

Login.defaultProps = {
  handleLogin: () => false
};

export default Login;
