import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export const server = "https://buzo-wheels-backend.onrender.com/api/v1";
export default store;
