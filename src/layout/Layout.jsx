import { Box, Card, Typography } from "@mui/material";
import Footer from "../components/footer/Footer";
import useStyles from "./layout.style";
import Header from "../components/header/Header";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.middle}>
        <Card
          component={Link}
          onClick={() => navigate("/cart")}
          className={classes.shoppingCart}
        >
          <ShoppingCart className={classes.cartIcon} />
          <Typography variant="caption" color="initial">
            {getTotalQuantity() || 0}
          </Typography>
        </Card>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
