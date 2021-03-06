import React from "react";
import PropTypes from "prop-types";

import { Avatar, Box } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import headerStyles from "./Header.styles";

const Header = ({ user }) => {
  const classes = headerStyles();

  const { images, display_name } = user;

  return (
    <Box className={classes.header}>
      <Box className={classes.header__left}>
        <Search />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </Box>
      <Box className={classes.header__right}>
        <Avatar src={images[0]?.url} alt={display_name} />
        <h4>{display_name}</h4>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  user: PropTypes.object
};

Header.defaultProps = {
  user: null
};

export default Header;
