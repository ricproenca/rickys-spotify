const TOKEN =
  "BQCsILVLoz9ntsqp0Ort1e-dq4OrNjajWdsUApNYYnCs80qSBdhTB0wo-PgDzxvTZRwyGK9V9_C0K-T_6Oyo1SEkLOd1BygtcAGa4g5yD0IejDB3wCSWLb3q01EmHi1Dz7KjBupRO-sdm7kFQxUxk5QPDcflEFR6YeM";
let device_id;
let player;

const addSpotifyWebPlaybackSDKScript = callback => {
  const existingScript = document.getElementById("spotify-web-player");

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.id = "spotify-web-player";

    document.body.appendChild(script);
    script.onload = () => callback && callback();
  }

  existingScript && callback && callback();
};

const waitForSpotifyWebPlaybackSDKToLoad = async () => {
  return new Promise(resolve => {
    window.Spotify
      ? resolve(window.Spotify)
      : (window.onSpotifyWebPlaybackSDKReady = () => resolve(window.Spotify));
  });
};

//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
export const getSpotifyPlayer = async () => {
  return new Promise(async resolve => {
    addSpotifyWebPlaybackSDKScript();
    const { Player } = await waitForSpotifyWebPlaybackSDKToLoad();
    console.log("The Web Playback SDK has loaded.", Player);

    player = new Spotify.Player({
      name: "Rickys Spotify Web Player",
      getOAuthToken: cb => cb(TOKEN)
    });

    // Error handling
    player.addListener("initialization_error", ({ message }) => {
      console.error("initialization_error", message);
    });
    player.addListener("authentication_error", ({ message }) => {
      console.error("authentication_error", message);
    });
    player.addListener("account_error", ({ message }) => {
      console.error("account_error", message);
    });
    player.addListener("playback_error", ({ message }) => {
      console.error("playback_error", message);
    });

    // Playback status updates
    player.addListener("player_state_changed", state => {
      console.log("player_state_changed", state);
    });

    // Ready
    player.addListener("ready", data => {
      device_id = data.device_id;
      console.log("Ready with Device ID", data);

      player.id = device_id;

      resolve(player);
    });

    // Not Ready
    player.addListener("not_ready", ({ device_id }) => {
      device_id = device_id;
      console.log("Device ID has gone offline", device_id);
    });

    // Connect to the player!
    player.connect();
  });
};

export const play = ({
  spotifyUri,
  playerInstance: {
    _options: { getOAuthToken, id }
  }
}) => {
  getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: "PUT",
      body: JSON.stringify({ uris: [spotifyUri] }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      }
    });
  });
};

export default getSpotifyPlayer;
