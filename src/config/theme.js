import { createMuiTheme } from "@material-ui/core/styles";

import CircularStdBoldWoff from "../assets/spotify/fonts/CircularStdBold.woff";

const CircularStdBold = {
  fontFamily: "CircularStdBoldWoff",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('CircularStdBold'),
    local('CircularStdBold'),
    url(${CircularStdBoldWoff}) format('woff')
  `
};

/**
 * createMuiTheme
 * Generate a theme base on the options received.
 * https://material-ui.com/customization/default-theme/
 * https://material-ui.com/customization/theming/
 */
const theme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      white: "#fff",
      black: "#191414",
      green: "#1db954"
    }
  },
  typography: {
    fontFamily: ["CircularStdBold", "sans-serif"].join(",")
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [CircularStdBold]
      }
    }
  }
});

console.log("🚀 ~ theme", theme);
export default theme;
