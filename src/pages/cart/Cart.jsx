import { Box, Typography } from "@mui/material";
import Layout from "../../layout/Layout";
import { useSelector } from "react-redux";
import CartPrice from "../../components/cart/CartPrice";
import CartItem from "../../components/cart/CartItems";
import useStyle from "./cartPage.Style";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { classes } = useStyle();

  return (
    <Layout>
      <Box className={classes.shoppingCart}>
        <Typography
          variant="h3"
          color="initial"
          align="center"
          sx={{ height: "80px" }}
        >
          Shopping Cart
        </Typography>
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <CartPrice />
      </Box>
    </Layout>
  );
};
export default Cart;
