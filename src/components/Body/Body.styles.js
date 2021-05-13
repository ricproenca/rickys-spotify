import { makeStyles } from "@material-ui/core/styles";

const bodyStyles = makeStyles(theme => ({
  body: {
    height: "100vh",
    flex: 0.85,
    color: "#fff",
    padding: 30,
    background: "linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1))",
    overflowY: "overlay"
  },
  "body::-webkit-scrollbar": {
    display: "none"
  },
  body__info: {
    display: "flex",
    alignItems: "flex-end",
    padding: 10
  },
  body__infoText: {
    flex: 1
  },
  "body__infoText > h2": {
    fontSize: 48,
    marginBottom: 10
  },
  "body__infoText > p": {
    fontSize: 14
  },
  "body__info > img": {
    height: "20vw",
    margin: "0 20px",
    boxShadow: "0 4px 60px rgba(0, 0, 0, 0.5)"
  },
  body__icons: {
    display: "flex",
    alignItems: "center"
  },
  "body__icons > .MuiSvgIcon-root": {
    marginRight: 20
  },
  body__shuffle: {
    fontSize: "80px !important",
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 20
  },
  "body__shuffle:hover": {
    transition: "100ms transform ease-in",
    transform: "scale(1.08)"
  },
  body__songs: {
    margin: "20px -30px"
  }
}));

export default bodyStyles;
