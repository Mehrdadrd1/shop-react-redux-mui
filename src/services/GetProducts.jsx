import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSvg from "../assets/svgs/LoadingSvg";
import { Box, Typography } from "@mui/material";
import useStyles from "./service.style";
import Pagination from "../components/pagination/Pagination";
import { useState } from "react";
import ProductCard from "../components/productCards/ProductCard";

const getData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products?limit=4");
  // use this in the end of url to limit api items => "?limit=5"
  return response.data;
};

const GetProducts = () => {
  const { classes } = useStyles();
  const pageSize = 4;
  const [page, setPage] = useState(1);
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

  if (isPending) return <LoadingSvg className={classes.pending}></LoadingSvg>;

  return (
    <Box className={classes.success}>
      <Box className={classes.successProducts}>
        {data.map((product) => (
          <Box key={product.id}>
            <ProductCard data={product} />
          </Box>
        ))}
      </Box>
      <Box>
        <Pagination count={4} onChange={(e, value) => setPage(value)} />
      </Box>
    </Box>
  );
};

export default GetProducts;
