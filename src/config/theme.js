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
      contrastText: "rgba(0, 0, 0, 0.87)",
      light: "#4ac776",
      main: "#1db954",
      dark: "#14813a"
    }
  }
});

export default theme;
