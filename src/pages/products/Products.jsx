import { Box } from "@mui/material";
import Layout from "../../layout/Layout";
import useStyles from "./products.style";
import GetProducts from "../../services/GetProducts";

const Products = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box className={classes.root} sx={{ boxShadow: 5 }}>
        <GetProducts />
      </Box>
    </Layout>
  );
};

export default Products;
