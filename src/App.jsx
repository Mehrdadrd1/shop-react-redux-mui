import { RouterProvider } from "react-router-dom";
import router from "./components/router/Router";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { store } from "./features/redux/store";
import theme from "./theme/Theme";
import { CssBaseline } from "@mui/material";
import "./style.css";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
