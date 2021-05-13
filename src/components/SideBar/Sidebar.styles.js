import { makeStyles } from "@material-ui/core/styles";

const sideBarStyles = makeStyles(theme => ({
  sidebar: {
    height: "100vh",
    color: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0.15,
    minWidth: 180,
    backgroundColor: "#040404"
  },
  sidebar__logo: {
    height: 55,
    width: "auto",
    padding: 10,
    margin: "auto"
  },
  sidebar__title: {
    marginLeft: 5,
    paddingTop: 20,
    paddingLeft: 5,
    fontSize: 16
  },
  sidebarHr: {
    border: "1px solid #282828",
    width: "90%",
    marginTop: 5
  }
}));

export default sideBarStyles;
