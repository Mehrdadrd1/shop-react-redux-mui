import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSvg from "../assets/svgs/LoadingSvg";
import { Box, Typography } from "@mui/material";
import useStyles from "./service.style";
import { useParams } from "react-router-dom";
import SingleCard from "../components/productCards/SingleCard";

const getData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  // use this in the end of url to limit api items => "?limit=5"
  return response.data;
};

const GetSingleProduct = () => {
  const { classes } = useStyles();
  const { productId } = useParams();
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
    let product = [];
    product = data[productId - 1];
    let content = <SingleCard data={product} />;

    return <Box className={classes.success}>{content}</Box>;
  }
};

export default GetSingleProduct;
