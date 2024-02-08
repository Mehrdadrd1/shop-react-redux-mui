import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSvg from "../assets/svgs/LoadingSvg";
import { Box, Typography } from "@mui/material";
import useStyles from "./service.style";
import ProductCard from "../components/productCards/ProductCard";

const getData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const GetBestProducts = () => {
  const { classes } = useStyles();
  const { isPending, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  if (data) {
    let products = [];
    products.push(data[6]);
    products.push(data[10]);
    products.push(data[12]);

    return (
      <Box className={classes.success}>
        <Box className={classes.successProducts}>
          {products.map((product) => (
            <Box key={product.id}>
              <ProductCard data={product} />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="body2" className={classes.error}>
        An error occured: {error.message}
      </Typography>
    );
  }

  if (isPending) return <LoadingSvg className={classes.pending} />;
};

export default GetBestProducts;
