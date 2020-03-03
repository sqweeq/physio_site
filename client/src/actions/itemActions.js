import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_GUEST_CART,
  GET_GUEST_CART,
  CLEAR_USER_CART,
  CLEAR_GUEST_CART,
  DELETE_FROM_GUEST_CART
} from "./types";
import axios from "axios";
import { tokenConfig, tokenConfigFormData } from "../actions/authActions";
import { returnErrors } from "../actions/errorActions";
// get items
export const getItems = () => (dispatch, getState) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// delete items
export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// add product to db
export const addItem = (newItem, formData) => (dispatch, getState) => {
  const form = Object.keys(newItem).reduce((f, k) => {
    f.append(k, newItem[k]);
    return f;
  }, new FormData());
  console.log(form.getAll("productImage"));

  return axios
    .post("/api/items", formData, tokenConfigFormData(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )

    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// add item to cart
export const addItemToCart = newItem => (dispatch, getState) => {
  if (newItem.constructor.name === "Object") {
    return axios
      .post("/api/items/cart", newItem, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: ADD_ITEM_TO_CART,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  } else if (newItem.length > 1) {
    newItem.map(item => {
      return axios
        .post("/api/items/cart", item, tokenConfig(getState))
        .then(res =>
          dispatch({
            type: ADD_ITEM_TO_CART,
            payload: res.data
          })
        )
        .catch(err =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    });
  }
};
// add item to localstorage for guest cart
export const addItemToGuestCart = item => dispatch => {
  let existingGuestCart = JSON.parse(localStorage.getItem("guestCart")) || [];

  existingGuestCart.push(item);
  localStorage.setItem("guestCart", JSON.stringify(existingGuestCart));

  dispatch({
    type: ADD_ITEM_TO_GUEST_CART,
    payload: item
  });
};
// get localstorage cart items
export const getGuestCartItems = () => dispatch => {
  let existingGuestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
  dispatch({
    type: GET_GUEST_CART,
    payload: existingGuestCart
  });
};
// delte localstorage guest cart item
export const deleteGuestItem = item => dispatch => {
  const existingGuestCart = JSON.parse(localStorage.getItem("guestCart"));
  const newGuestCart = existingGuestCart.filter(
    cartItem => cartItem.guestItemID !== item.guestItemID
  );

  localStorage.setItem("guestCart", JSON.stringify(newGuestCart));
  dispatch({
    type: DELETE_FROM_GUEST_CART,
    payload: item
  });
};
// clearall localstorage
export const clearGuestCart = () => dispatch => {
  localStorage.clear();
  let existingGuestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
  localStorage.setItem("guestCart", JSON.stringify(existingGuestCart));

  dispatch({
    type: CLEAR_GUEST_CART
  });
};
// clear user cart
export const clearUserCart = (user, items) => (dispatch, getState) => {
  let newCart = [];
  localStorage.setItem("guestCart", JSON.stringify(newCart));

  items.map(item => {
    if (item.userRefID === user._id) {
      return axios.delete(`/api/items/${item._id}`, tokenConfig(getState));
    } else return item;
  });

  dispatch({
    type: CLEAR_USER_CART,
    payload: user._id
  });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
