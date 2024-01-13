import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.paper.main,
      color: theme.palette.primary.dark,
      maxWidth: "100%",
      minHeight: "75vh",
      padding: "5px",
      marginRight: "5px",
      borderRadius: "15px",
    },
    list: {
      backgroundColor: theme.palette.paper.main,
      width: "100%",
    },
    link: {
      color: theme.palette.text.main,
      listStyle: "none",
      textDecoration: "none",
    },
    icon: {
      color: theme.palette.text.main,
    },
  };
});

export default useStyles;
