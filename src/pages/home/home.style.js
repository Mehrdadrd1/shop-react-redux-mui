import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: theme.palette.paper.main,
      color: theme.palette.primary.dark,
      minWidth: "71vw",
      maxWidth: "80vw",
      minHeight: "75vh",
      padding: "5px",
      borderRadius: "15px",
    },
  };
});

export default useStyles;
