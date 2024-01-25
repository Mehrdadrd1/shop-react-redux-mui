import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    mainCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.main,
      margin: "5px",
      padding: "5px",
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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
    },
  };
});

export default useStyles;
