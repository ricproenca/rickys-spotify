import React from "react";

import { Avatar, Box } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import "./Header.styles";

function Header() {
  return (
    <Box className="header">
      <Box className="header__left">
        <Search />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </Box>
      <Box className="header__right">
        {/* <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4> */}
      </Box>
    </Box>
  );
}

export default Header;
