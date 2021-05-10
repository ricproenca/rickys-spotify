import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import spotifyLogo from "./assets/spotify-logo.png"; // Tell webpack this JS file uses this image
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
        <Button
          className={classes.LoginButton}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login to Rickys spotify
        </Button>
      </Box>
      <Box
        className={classes.Message}
        textAlign="center"
        fontWeight="fontWeightBold"
      >
        <Typography variant="overline" display="block" gutterBottom>
          Not another spotify clone...
        </Typography>
      </Box>
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
