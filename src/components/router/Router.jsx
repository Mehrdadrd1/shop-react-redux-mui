import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import Cart from "../../pages/cart/Cart";
import SignIn from "../../pages/signIn/SignIn";
import AboutME from "../../pages/aboutME/AboutME";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/cart", element: <Cart /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "/aboutMe", element: <AboutME /> },
]);

export default router;
