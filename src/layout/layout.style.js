import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      maxWidth: "100%",
      backgroundColor: theme.palette.paper.light,
      color: theme.palette.primary.light,
      display: "flex",
      flexDirection: "column",
      // flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100vh",
      padding: "10px",
    },
    middle: {
      flex: 1,
      maxWidth: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "50px",
    },
    shoppingCart: {
      backgroundColor: theme.palette.primary.light,
      position: "relative",
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      bottom: "80px",
      right: "20px",
      zIndex: 1,
      boxShadow: 0,
    },
    cartIcon: { width: "100%", textAlign: "center" },
  };
});

export default useStyles;
