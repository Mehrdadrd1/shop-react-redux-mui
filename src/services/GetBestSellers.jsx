import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSvg from "../assets/svgs/LoadingSvg";
import { Box, Typography } from "@mui/material";
import useStyles from "./service.style";
import BestSellersView from "../components/bestSellersView/BestSellersView";

const getData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const GetBestProducts = () => {
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

  if (data) {
    let bestOnes = [];
    let myIndices = [6, 8, 16];
    myIndices.forEach((i) => bestOnes.push(data[i]));
    return (
      <Box className={classes.success}>
        <Box className={classes.successProducts}>
          {bestOnes.map((product) => (
            <Box key={product.id}>
              <BestSellersView data={product} />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
};

export default GetBestProducts;
