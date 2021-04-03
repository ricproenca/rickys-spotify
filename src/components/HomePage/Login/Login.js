import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import spotifyLogo from "./assets/spotify-logo.png"; // Tell webpack this JS file uses this image
import loginStyles from "./Login.styles";

const Login = ({ handleLogin }) => {
  const classes = loginStyles();
  const theme = useTheme();
  console.log("🚀 ~ Login ~ theme", theme);

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
          Login to spotify
        </Button>
      </Box>
      <Box
        className={classes.Message}
        textAlign="center"
        fontWeight="fontWeightBold"
      >
        <Typography variant="button" display="block" gutterBottom>
          Welcome to Rickys Spotify.
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          (Just another spotify clone)
        </Typography>
      </Box>
    </Box>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func
};

Login.defaultProps = {
  handleLogin: () => {}
};

export default Login;
