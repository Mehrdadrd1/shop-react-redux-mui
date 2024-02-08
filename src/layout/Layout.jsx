import { Box, Grid } from "@mui/material";
import Footer from "../components/footer/Footer";
import useStyles from "./layout.style";
import Header from "../components/header/Header";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

const Layout = ({ children }) => {
  const { classes } = useStyles();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} className={classes.Grid}>
        <Grid item xl={12}>
          <Header />
        </Grid>
        <Grid item xl={12}>
          {children}
        </Grid>
        <Grid item xl={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
