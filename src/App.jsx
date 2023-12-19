import { RouterProvider } from "react-router-dom";
import router from "./components/router/Router";
import "./style.css";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
