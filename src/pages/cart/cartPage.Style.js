import { makeStyles } from "tss-react/mui";

const useStyle = makeStyles()((theme) => {
  return {
    shoppingCart: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export default useStyle;
