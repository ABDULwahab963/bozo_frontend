import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export const server = "http://localhost:4000/api/v1";
export default store;
