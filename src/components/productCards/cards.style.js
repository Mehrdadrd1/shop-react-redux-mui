import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    mainCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.main,
      margin: "10px",
      padding: "5px",
      marginRight: "20px",
      marginLeft: "20px",
      borderRadius: "15px",
      width: "300px",
      height: "450px",
    },
    image: {
      margin: "0 auto",
      height: "250px",
      maxWidth: "200px",
      padding: "5px",
      borderRadius: "15px",
      objectFit: "contain",
    },
    btnArea: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    singleCard: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "450px",
      backgroundColor: theme.palette.secondary.main,
      margin: "10px",
      padding: "5px",
      marginRight: "20px",
      marginLeft: "20px",
      borderRadius: "15px",
    },
    singleCardAction: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    singleCardBtn: {
      display: "flex",
    },
    singleCardImage: {
      display: "flex",
      justifySelf: "flex-start",
      margin: "0 auto",
      height: "250px",
      maxWidth: "200px",
      padding: "5px",
      borderRadius: "15px",
      objectFit: "contain",
    },
    Link: {
      textDecoration: "none",
    },
  };
});

export default useStyles;
