import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      position: "relative",
      width: "100%",
      borderRadius: "12px",
    },
  };
});

export default useStyles;
