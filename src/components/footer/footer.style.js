import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      minHeight: "40px",
    },
    copyRight: {
      backgroundColor: theme.palette.secondary.main,
    },
    mainFooter: {
      backgroundColor: theme.palette.secondary.light,
    },
    contact: {
      backgroundColor: theme.palette.secondary.dark,
    },
  };
});

export default useStyles;
