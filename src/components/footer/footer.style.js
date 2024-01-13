import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px",
      borderRadius: "15px",
    },
    typography: {
      paddingLeft: "2px",
    },
    buttomNavigate: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    logo: {
      width: "35px",
      paddingTop: "5px",
      paddingRight: "10px",
      margin: "2px",
    },
  };
});

export default useStyles;
