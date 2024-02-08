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

      margin: "10px",
      padding: "15px",
      borderRadius: "15px",
    },
  };
});

export default useStyles;
