import { Box } from "@mui/material";
import Footer from "../components/footer/Footer";
import useStyles from "./layout.style";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.middle}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
