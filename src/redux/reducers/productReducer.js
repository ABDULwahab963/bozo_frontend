import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  {},
  {
    getAllCarsRequest: (state) => {
      state.loading = true;
    },

    getAllCarsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    },

    getAllCarsRequest: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getCarByIdRequest: (state) => {
      state.loading = true;
    },

    getCarByIdSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload.product;
    },

    getCarByIdFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addToCartRequest: (state) => {
      state.loading = true;
    },

    addToCartSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    addToCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteCartItemRequest: (state) => {
      state.loading = true;
    },

    deleteCartItemSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    deleteCartItemFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    checkOutRequest: (state) => {
      state.loading = true;
    },

    checkOutSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    checkOutFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
  }
);
