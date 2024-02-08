import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    home: {
      backgroundColor: theme.palette.paper.main,
      color: theme.palette.primary.dark,
      width: "100%",
      padding: "25px",
      borderRadius: "12px",
    },
  };
});

export default useStyles;
