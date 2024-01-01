import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      textAlign: "center",
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export default { useStyles };
