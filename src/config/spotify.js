/**
 * authEndpoint
 * URL where we need to authenticate using Spotify.
 * All Spotify Authentication requests must be passed through this URL.
 */
const authEndpoint = "https://accounts.spotify.com/authorize";

/**
 * redirectUri
 * We should configure this in Spotify Web API settings.
 * This is the callback URL where to take back the user if the Spotify login was successful.
 */
// const redirectUri = "http://localhost:3000/redirect/";
const redirectUri = "https://spotify-clone-medium.web.app/redirect/";

/**
 * clientId
 * Provided  by the Spotify Web API.
 */
const spotifyClientId = "05647fe3b2f54b7786acea04e66bfea7";

/**
 * scopes
 * Permissions which you need to ask Spotify for.
 * More such permissions are available on Spotify API Documentation.
 */
const spotifyScopes = [
  "ugc-image-upload",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "app-remote-control",
  "playlist-modify-public",
  "user-modify-playback-state",
  "playlist-modify-private",
  "user-follow-modify",
  "user-read-currently-playing",
  "user-follow-read",
  "user-library-modify",
  "user-read-playback-position",
  "playlist-read-private",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "playlist-read-collaborative",
  "streaming"
];

const clientId = `client_id=${spotifyClientId}`;
const redirect = `redirect_uri=${redirectUri}`;
const scopes = `scope=${spotifyScopes.join("%20")}`;
const responseType = "response_type=token";
const showDialog = "show_dialog=true";

/**
 * loginUrl
 * Final URL which needs to be called in order to authorize an user for this Spotify Clone app.
 * This URL contains the Client ID and all the permissions
 * so that Spotify knows about our app and allows user authentication.
 */
export const loginUrl = `${authEndpoint}?${clientId}&${redirect}&${scopes}&${responseType}&${showDialog}`;
