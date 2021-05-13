import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebarOption: {
    display: "flex",
    alignItems: "center",
    color: "gray",
    height: 40,
    cursor: "pointer",
    transition: "200ms color ease-in",
    "&:hover": {
      color: "#fff"
    }
  },
  sidebarOption__icon: {
    marginLeft: 5,
    paddingRight: 5,
    fontSize: 32
  },
  sidebarOption__p: {
    marginTop: 10,
    marginLeft: 20
  },
  sidebarOption__h4: {
    marginTop: 4,
    marginLeft: 8
  }
}));

export default useStyles;
