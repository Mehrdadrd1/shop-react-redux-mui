import { Box, Grid } from "@mui/material";
import Footer from "../components/footer/Footer";
import useStyles from "./layout.style";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} className={classes.Grid}>
        <Grid item xl={12} width={"100vw"}>
          <Header />
        </Grid>
        <Grid item xl={12} width={"100vw"}>
          {children}
        </Grid>
        <Grid item xl={12} width={"100vw"}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
