import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.paper.main,
      color: theme.palette.primary.dark,
      // minWidth: "72vw",
      // maxWidth: "86vw",
      // minHeight: "75vh",
      margin: "10px",
      padding: "5px",
      borderRadius: "15px",
    },
  };
});

export default useStyles;
