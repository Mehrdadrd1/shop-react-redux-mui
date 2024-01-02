import { Box, Grid } from "@mui/material";
import Footer from "../components/footer/Footer";
import useStyles from "./layout.style";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";

const Layout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.middle}>
        <Box className={classes.sideBar}>
          <SideBar />
        </Box>
        <Box className={classes.content}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
