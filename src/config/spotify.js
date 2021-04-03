const redirectUri = "http://localhost:3000/redirect/";
const spotifyClientId = "b2726485320a441e9f1d8fccf19a92ea";

const spotifyScopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

const clientId = `client_id=${spotifyClientId}`;
const redirect = `redirect_uri=${redirectUri}`;
const scopes = `scope=${spotifyScopes.join("%20")}`;
const responseType = "response_type=token";
const showDialog = "show_dialog=true";

export const authEndpoint = "https://accounts.spotify.com/authorize";

export const loginUrl = `${authEndpoint}?${clientId}&${redirect}&${scopes}&${responseType}&${showDialog}`;
