import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.primary.light,
      minHeight: "50px",
      margin: "10px",
      borderRadius: "6px",
    },
    header: {
      display: "flex",
      justifyContent: "center",
    },
  };
});

export default useStyles;
