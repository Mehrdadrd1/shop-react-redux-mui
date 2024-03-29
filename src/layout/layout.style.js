import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      width: "100%",
      height: "100vh",
      padding: "10px",
    },
    Grid: {
      width: "100%",
      height: "100%",
    },
  };
});

export default useStyles;
