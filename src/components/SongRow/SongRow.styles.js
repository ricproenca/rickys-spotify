import { makeStyles } from "@material-ui/core/styles";

const SongRowStyles = makeStyles(theme => {
  return {
    songRow: {
      marginLeft: 20,
      padding: 20,
      display: "flex",
      alignItems: "center",
      zIndex: 100,
      color: "#fff",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#000",
        opacity: 0.8
      }
    },
    songRow__info: {
      marginLeft: 20,
      "& h1": {
        fontSize: 16
      },
      "& p": {
        fontSize: 14,
        marginTop: 3,
        color: "#808080"
      }
    },
    songRow__album: {
      height: 40,
      width: 40
    }
  };
});

export default SongRowStyles;
