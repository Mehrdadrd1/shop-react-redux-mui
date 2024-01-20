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
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.main,
      padding: "15px",
      borderRadius: "15px",
    },
  };
});

export default useStyles;
