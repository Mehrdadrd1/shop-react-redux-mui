import { Card, Typography } from "@mui/material";
import Layout from "../../layout/Layout";
import { useSelector } from "react-redux";
import CartPrice from "../../components/cart/CartPrice";
import CartItem from "../../components/cart/CartItems";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Layout>
      <Card>
        <Typography
          variant="h3"
          color="initial"
          align="center"
          sx={{ height: "80px" }}
        >
          Shopping Cart
        </Typography>
        <CartPrice />
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
      </Card>
    </Layout>
  );
};
export default Cart;
