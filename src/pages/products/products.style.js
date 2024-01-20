import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.paper.main,
      color: theme.palette.primary.dark,
      minWidth: "72vw",
      maxWidth: "86vw",
      minHeight: "75vh",
      padding: "5px",
      borderRadius: "15px",
    },
    products: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  };
});

export default useStyles;
