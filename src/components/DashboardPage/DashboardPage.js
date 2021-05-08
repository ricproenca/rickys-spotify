import React, { Fragment, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

/**
 * Dashboard Page
 */
const DashboardPage = () => {
  console.log("🚀 ~ DashboardPage ");

  useEffect(() => {
    spotify.getMe().then((user) => {
      console.log("🚀 ~ spotify.getMe ~ user", user);
    });
  }, []);

  return <Fragment>Dashboard Page </Fragment>;
};

export default DashboardPage;
