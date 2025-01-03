import axios from "axios";
import { server } from "../store";

export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "getAllCarsRequest" });
  try {
    let { data } = await axios.get(`${server}/products`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "getAllCarsSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getAllCarsFail", payload: error.response.data.message });
  }
};

export const getCarById = (id) => async (dispatch) => {
  dispatch({ type: "getCarByIdRequest" });
  try {
    let { data } = await axios.get(`${server}/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "getCarByIdSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getCarByIdFail", payload: error.response.data.message });
  }
};

export const addToCart = (id) => async (dispatch) => {
  dispatch({ type: "addToCartRequest" });
  try {
    let { data } = await axios.put(
      `${server}/product/${id}/addtocart`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "addToCartSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "addToCartFail", payload: error.response.data.message });
  }
};

export const deleteCartItem = (id) => async (dispatch) => {
  dispatch({ type: "deleteCartItemRequest" });
  try {
    let { data } = await axios.put(
      `${server}/cart/${id}/delete`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "deleteCartItemSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteCartItemFail",
      payload: error.response.data.message,
    });
  }
};

export const checkOut = (cart) => async (dispatch) => {
  dispatch({ type: "checkOutRequest" });
  try {
    let { data } = await axios.put(
      `${server}/checkout`,
      {cart},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "checkOutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "checkOutFail", payload: error.response.data.message });
  }
};
