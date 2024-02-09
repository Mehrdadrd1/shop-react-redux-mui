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
import useStyles from "./cart.Style";

const CartItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  return (
    <Card className={classes.itemCard}>
      <CardContent className={classes.content}>
        <CardMedia
          component="img"
          src={image}
          alt={title}
          className={classes.image}
        />
      </CardContent>
      <Box>
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
      </Box>
      <CardActions className={classes.btn}>
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
