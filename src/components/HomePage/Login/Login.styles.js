import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  Box: {
    padding: "30px",
    justifyContent: "center"
  },
  Logo: {
    width: "300px"
  },
  LoginButton: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "50px",
    paddingRight: "50px",
    borderRadius: 16,
    letterSpacing: "3px",
    fontWeight: "bold",
    fontSize: 16
  },
  Message: {
    paddingTop: "30px",
    color: theme.palette.grey[400]
  }
}));

export default useStyles;
