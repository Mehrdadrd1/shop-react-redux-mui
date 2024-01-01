import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    hiro: {
      backgroundColor: theme.palette.primary.light,
      minHeight: "50px",
    },
    nav: {
      backgroundColor: theme.palette.primary.dark,
      minHeight: "30px",
    },
  };
});

export default useStyles;
