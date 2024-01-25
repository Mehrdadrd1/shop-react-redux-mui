import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSvg from "../assets/svgs/LoadingSvg";
import { Box, Typography } from "@mui/material";
import useStyles from "./service.style";
import ProductCard from "../components/productCard/ProductCard";
import Pagination from "../components/pagination/Pagination";

const getData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  // use this in the end of url to limit api items => "?limit=5"
  return response.data;
};

const GetProducts = () => {
  const { classes } = useStyles();
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
        <Pagination />
      </Box>
    </Box>
  );
};

export default GetProducts;
