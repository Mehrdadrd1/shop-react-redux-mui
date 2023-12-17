import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Cart from "../../pages/Cart";
import SignIn from "../../pages/SignIn";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/cart", element: <Cart /> },
  { path: "/signIn", element: <SignIn /> },
]);

export default router;
