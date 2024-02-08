import { Box } from "@mui/material";
import Layout from "../../layout/Layout";
import useStyles from "./home.style";
import GetBestProducts from "../../services/GetBestSellers";

const Home = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box className={classes.home} sx={{ boxShadow: 5 }}>
        <GetBestProducts />
      </Box>
    </Layout>
  );
};
export default Home;
