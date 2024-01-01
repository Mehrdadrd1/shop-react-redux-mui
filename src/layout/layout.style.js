import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    layout: {
      backgroundColor: theme.palette.primary.main,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "100vh",
    },
    main: {
      flex: 1,
    },
    layoutFooter: {
      backgroundColor: "red",
    },
  };
});

export default useStyles;
