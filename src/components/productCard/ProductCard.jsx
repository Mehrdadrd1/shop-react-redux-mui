import { Box, Typography, Button } from "@mui/material";
import React from "react";
import useStyles from "./productsCard.style";

const ProductCard = (props) => {
  const { classes } = useStyles();
  const product = props.data;
  return (
    <Box className={classes.mainCard}>
      <Box
        component="img"
        alt="productImageThe house from the offer."
        src={product.image}
        className={classes.image}
      />
      <Typography variant="body1" color="initial" className={classes.title}>
        {product.title}
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        sx={{ alignSelf: "flex-start", justifySelf: "flex-end" }}
      >
        Price: {product.price}$
      </Typography>
      <Button variant="contained" color="secondary">
        Add
      </Button>
    </Box>
  );
};

export default ProductCard;
