import { configureStore } from "@reduxjs/toolkit";
import cartSclice from "./slice.Cart";

const store = configureStore({
  reducer: cartSclice,
});

export default store;
