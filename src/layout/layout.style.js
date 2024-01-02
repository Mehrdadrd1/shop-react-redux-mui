import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.light,
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    middle: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
    },
    sideBar: {
      width: "120px",
      backgroundColor: theme.palette.primary.light,
      borderRadius: "6px",
      height: "98%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      width: "600px",
      backgroundColor: theme.palette.primary.light,
      borderRadius: "6px",
      height: "98%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

export default useStyles;
