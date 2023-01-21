import { configureStore } from "@reduxjs/toolkit";
import { menuDrawerReducer } from "./slices/menuDrawerSlice";
import { tableReducer } from "./slices/tableSlice";

export const store = configureStore({
  reducer: { drawer: menuDrawerReducer, table: tableReducer },
});
