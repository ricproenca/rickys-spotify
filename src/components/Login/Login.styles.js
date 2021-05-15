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
    width: 300,
    paddingBottom: 100
  },
  LoginButton: {
    padding: 10,
    borderRadius: 99,
    fontWeight: 600,
    fontSize: 16,
    backgroundColor: theme.palette.common.green,
    width: 300,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
      opacity: 0.8
    }
  },
  Message: {
    color: theme.palette.common.green
  }
}));

export default loginStyles;
