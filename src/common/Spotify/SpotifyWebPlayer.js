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
export const loadSpotifyWebPlayer = async () => {
  return new Promise(async resolve => {
    addSpotifyWebPlaybackSDKScript();
    const { Player } = await waitForSpotifyWebPlaybackSDKToLoad();
    console.log("The Web Playback SDK has loaded.", Player);
    resolve();
  });
};

export default loadSpotifyWebPlayer;
