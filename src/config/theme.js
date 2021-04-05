import { createMuiTheme } from "@material-ui/core/styles";

/**
 * createMuiTheme
 * Generate a theme base on the options received.
 * https://material-ui.com/customization/default-theme/
 * https://material-ui.com/customization/theming/
 */
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1db954"
    }
    // background: {
    //   default: "#000"
    // }
    // common: {
    //   black: "#fff",
    //   white: "#000"
    // }
  }
});

export default theme;
