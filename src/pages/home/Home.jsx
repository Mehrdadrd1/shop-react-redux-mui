import { Box, Typography } from "@mui/material";
import Layout from "../../layout/Layout";
import useStyles from "./home.style";

const Home = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box className={classes.root} sx={{ boxShadow: 5 }}>
        <Typography>Home</Typography>
        <Box className={classes}></Box>
      </Box>
    </Layout>
  );
};
export default Home;
