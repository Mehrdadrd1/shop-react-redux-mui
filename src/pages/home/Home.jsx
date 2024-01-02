import { Box } from "@mui/material";
import Layout from "../../layout/Layout";
import useStyles from "./home.style";

const Home = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box className={classes.root}>Home</Box>
    </Layout>
  );
};
export default Home;
