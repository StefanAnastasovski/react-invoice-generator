import { configureStore } from "@reduxjs/toolkit";
import { menuDrawerReducer } from "./slices/menuDrawerSlice";

export const store = configureStore({
  reducer: { drawer: menuDrawerReducer },
});
