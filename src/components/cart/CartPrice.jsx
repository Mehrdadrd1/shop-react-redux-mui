import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStyles from "./cart.Style";

const CartPrice = () => {
  const cart = useSelector((state) => state.cart);
  const { classes } = useStyles();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalQuantity, totalPrice };
  };

  return (
    <Card className={classes.priceCard}>
      <CardContent>
        <Typography
          variant="h6"
          color="Highlight"
          align="center"
          fontWeight="bold"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          ORDER SUMMARY
        </Typography>
        <Box>
          <Typography className="total__p">
            Total: {getTotal().totalQuantity} items
            <br />
            <Typography
              variant="body1"
              color="initial"
              align="center"
              sx={{ height: "80px" }}
            >
              Total Price: ${getTotal().totalPrice}
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartPrice;
