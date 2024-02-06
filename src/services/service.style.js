import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    error: {
      maxWidth: "100%",
      backgroundColor: theme.palette.paper.light,
      color: theme.palette.error.main,
    },
    success: {
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    successProducts: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    pending: {
      color: theme.palette.text.primary,
    },
  };
});

export default useStyles;
