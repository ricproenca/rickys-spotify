import { createMuiTheme } from "@material-ui/core/styles";
/**
 * https://material-ui.com/customization/default-theme/
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
