import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import useStyles from "./layout.style";

const Layout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.layout}>
      <Header />
      <Box className={classes.main}>{children}</Box>
      <Box className={classes.layoutFooter}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
