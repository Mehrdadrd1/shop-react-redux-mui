import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      maxWidth: "100%",
      backgroundColor: theme.palette.paper.light,
      color: theme.palette.primary.light,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      padding: "10px",
    },
    middle: {
      flex: 1,
      maxWidth: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
  };
});

export default useStyles;
