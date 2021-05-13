import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30
  },
  header__right: {
    display: "flex",
    alignItems: "center",
    "& h4": {
      marginLeft: 10
    }
  },
  header__left: {
    flex: 0.5,
    display: "flex",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    color: "#808080",
    alignItems: "center",
    "& input": {
      border: "none",
      width: "100%",
      outline: "none"
    }
  }
}));

export default headerStyles;
