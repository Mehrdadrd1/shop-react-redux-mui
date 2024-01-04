import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.primary.light,
      minHeight: "10vh",
      margin: "10px",
      borderRadius: "15px",
    },
    header: {
      display: "flex",
      justifyContent: "center",
    },
  };
});

export default useStyles;
