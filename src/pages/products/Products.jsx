import { Box } from "@mui/material";
import Layout from "../../layout/Layout";
import useStyles from "./products.style";

const Products = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box className={classes.root} sx={{ boxShadow: 5 }}>
        Products
      </Box>
    </Layout>
  );
};

export default Products;
