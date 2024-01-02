import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      textAlign: "center",
      backgroundColor: theme.palette.primary.light,
      minHeight: "35px",

      margin: "10px",
      borderRadius: "6px",
    },
  };
});

export default useStyles;
