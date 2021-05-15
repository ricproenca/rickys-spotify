import { makeStyles } from "@material-ui/core/styles";

const loginStyles = makeStyles(theme => ({
  Container: {
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  Box: {
    padding: 30,
    justifyContent: "center"
  },
  Logo: {
    width: 300
  },
  LoginButton: {
    padding: 10,
    borderRadius: 99,
    fontWeight: 600,
    fontSize: 16,
    backgroundColor: theme.palette.common.green,
    color: "#ffffff",
    width: 300
  }
}));

export default loginStyles;
