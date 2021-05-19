const play = ({
  spotify_uri,
  playerInstance: {
    _options: { getOAuthToken, id }
  },
  device_id
}) => {
  getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: "PUT",
      body: JSON.stringify({ uris: [spotify_uri] }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      }
    });
  });
};

// play({
//   playerInstance: player,
//   spotify_uri: "spotify:track:7xGfFoTpQ2E7fRF5lN10tr",
//   device_id: device_id
// });
