import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../features/redux/sliceCart";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";

const CartItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent>
        <CardMedia component="img" src={image} alt={title} className={image} />
        <Typography
          variant="h6"
          color="initial"
          align="center"
          sx={{ height: "80px" }}
        >
          {title}
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
          <Box>${price}</Box>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decrementQuantity(id))}
        >
          -
        </Button>
        <Typography variant="h6" color="initial">
          {quantity}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(incrementQuantity(id))}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
