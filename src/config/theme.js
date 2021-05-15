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
    common: {
      white: "#fff",
      black: "#191414",
      green: "#1db954"
    }
  }
});

console.log("🚀 ~ theme", theme);
export default theme;
