import { Box } from "@mui/material";
import Layout from "../../layout/Layout";
import useStyles from "./products.style";
import GetSingleProduct from "../../services/GetSingleProduct";

const ProductDetails = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box className={classes.root} sx={{ boxShadow: 5 }}>
        <GetSingleProduct />
      </Box>
    </Layout>
  );
};

export default ProductDetails;
