import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  console.log("🚀 theme", theme);
  return {
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
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff",
      width: 300
    }
  };
});

export default useStyles;
