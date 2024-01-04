import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.dark,
      maxWidth: "100%",
      minHeight: "75vh",
      padding: "5px",
      marginRight: "5px",
      borderRadius: "15px",
    },
  };
});

export default useStyles;
