import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSvg from "../assets/svgs/LoadingSvg";
import { Box, Typography } from "@mui/material";
import useStyles from "./service.style";
import ProductCard from "../components/productCards/ProductCard";
import ProductsPagination from "../components/paginations/ProductsPagination";
import { useState } from "react";

const GetProducts = () => {
  const url = "https://fakestoreapi.com/products";
  // use this in the end of url to limit api items => "?limit=5"
  const { classes } = useStyles();
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: getData,
  });

  if (error) {
    return (
      <Typography variant="body2" className={classes.error}>
        An error occured: {error.message}
      </Typography>
    );
  }

  if (isPending) return <LoadingSvg className={classes.pending} />;

  if (data) {
    return (
      <Box className={classes.success}>
        <Box className={classes.successProducts}>
          {products.map((product) => (
            <Box key={product.id}>
              <ProductCard data={product} />
            </Box>
          ))}
        </Box>
        <Box>
          <ProductsPagination setProducts={(p) => setProducts(p)} />
        </Box>
      </Box>
    );
  }
};
export default GetProducts;
