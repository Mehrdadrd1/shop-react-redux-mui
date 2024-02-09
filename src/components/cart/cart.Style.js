import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    itemCard: {
      width: "99%",
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "5px",
      height: "250px",
    },
    image: {
      height: "180px",
      width: "150px",
      borderRadius: "12px",
      objectFit: "contain",
    },
    content: {},
    btn: {},
    priceCard: {
      width: "99%",
      backgroundColor: theme.palette.secondary.main,
    },
  };
});

export default useStyles;
