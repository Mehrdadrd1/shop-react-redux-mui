import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/redux/sliceCart";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@mui/material";
import useStyles from "./cards.style";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const product = props.data;
  return (
    <Card className={classes.mainCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={product.image}
          alt={product.title}
          className={classes.image}
        />
        <CardContent sx={{ height: "130px" }}>
          <Typography
            variant="h6"
            color="initial"
            align="center"
            sx={{ height: "80px" }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body1"
            color="Highlight"
            align="center"
            fontWeight="bold"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box sx={{ marginRight: "5px" }}>Price:</Box>
            <Box>${product.price}</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnArea}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Card
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/productDetails/${product.id}`)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
