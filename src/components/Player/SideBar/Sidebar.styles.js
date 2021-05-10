import { makeStyles } from "@material-ui/core/styles";

const sideBarStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100vh",
    color: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0.2,
    minWidth: 230,
    backgroundColor: "#040404"
  },
  sidebarHr: {
    border: "1px solid #282828",
    width: "100%"
  },
  sidebar__logo: {
    height: 100,
    width: "auto",
    padding: 10,
    margin: "auto"
  },
  sidebar__title: {
    marginLeft: 5,
    padding: 5,
    fontSize: 16
  }
}));

export default sideBarStyles;
