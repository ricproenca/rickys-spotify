import React from "react";

import Container from "@material-ui/core/Container";

import { loginUrl } from "../../config/spotify";
import Login from "../../components/Login/Login";

/**
 * Not found page (not used for now)
 */
const NotFoundPage = () => {
  const handleLogin = () => (window.location = loginUrl);

  return (
    <Container fixed>
      <Login handleLogin={handleLogin} />
    </Container>
  );
};

export default NotFoundPage;
