import { makeStyles } from "@material-ui/core/styles";

const footerStyles = makeStyles(theme => {
  return {
    footer: {
      position: "fixed",
      display: "flex",
      justifyContent: "space-evenly",
      bottom: 0,
      height: 65,
      width: "100%",
      backgroundColor: "#282828",
      padding: 20
    },
    footer__left: {
      flex: 0.3,
      display: "flex",
      alignItems: "center",
      color: "#fff",
      maxWidth: 300
    },
    footer__center: {
      flex: 0.4,
      padding: "0 100px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: 300
    },
    footer__right: {
      flex: 0.3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#fff"
    },
    footer__albumLogo: {
      height: 60,
      width: 60,
      marginRight: 20,
      objectFit: "contain"
    },
    footer__green: {
      color: "#1ed15e",
      "&hover": {
        transition: "transform 0.2 ease-in",
        transform: "scale(1.2) !important"
      }
    },
    footer__icon: {
      "& hover": {
        transition: "transform 0.2 ease-in",
        transform: "scale(1.2) !important"
      }
    },
    footer__right: {
      "& MuiSlider-root": {
        color: "#1ed15e"
      }
    }
  };
});

export default footerStyles;
