import { Box, Grid } from "@mui/material";
import Footer from "../components/footer/Footer";
import useStyles from "./layout.style";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Layout = ({ children }) => {
  const { classes } = useStyles();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    ...theme.typography.body2,
    padding: "10px",
    textAlign: "center",
    color: theme.palette.primary.dark,
  }));

  return (
    <Box className={classes.root}>
      <Header />
      <Grid container spacing={0} className={classes.middle}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Layout;
