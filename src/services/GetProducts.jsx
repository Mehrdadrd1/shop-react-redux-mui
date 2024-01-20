import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSvg from "../assets/svgs/LoadingSvg";
import { Box, Typography } from "@mui/material";
import useStyles from "./service.style";

const getData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
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
      {data.map((product) => (
        <Box key={product.id}>{product.title}</Box>
      ))}
    </Box>
  );
};

export default GetProducts;
