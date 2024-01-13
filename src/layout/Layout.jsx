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
      <Grid container spacing={0} className={classes.middle}>
        <Grid item xs="auto">
          <SideBar />
        </Grid>
        <Grid item xs="auto">
          {children}
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Layout;
