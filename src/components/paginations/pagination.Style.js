import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.primary.dark,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px 0px",
    },
  };
});

export default useStyles;
