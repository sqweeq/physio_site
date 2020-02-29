import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_GUEST_CART,
  GET_GUEST_CART,
  // DELETE_FROM_GUEST_CART,
  CLEAR_USER_CART,
  CLEAR_GUEST_CART,
  DELETE_FROM_GUEST_CART
} from "./types";
import axios from "axios";
import { tokenConfig, tokenConfigFormData } from "../actions/authActions";
import { returnErrors } from "../actions/errorActions";

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
  //   .then(myfunction());
  // function myfunction() {
  //   const { items } = getState().item;
  //   const { user } = getState().auth;
  //   const { isAuthenticated } = getState().auth;
  //   let existingGuestCart = JSON.parse(localStorage.getItem("guestCart"));
  //   // added userID to guest cart items
  //   let newItems =
  //     isAuthenticated === true &&
  //     existingGuestCart &&
  //     existingGuestCart.filter(item => {
  //       if (item.userRefID !== user._id) {
  //         item.userRefID = user._id;
  //       }
  //       return item;
  //     });
  //   let userLocalCompare =
  //     newItems &&
  //     newItems.filter(guestItem => {
  //       return items.some(
  //         userItem =>
  //           userItem._id === guestItem._id &&
  //           guestItem.guestItemID !== userItem.guestItemID
  //       );
  //     });
  //   console.log(userLocalCompare);
  //   addItemToCart(userLocalCompare);
  // }
};
// export const loadLocalToUser = () => (dispatch, getState) => {
//   let existingGuestCart = JSON.parse(localStorage.getItem("guestCart"))

// };
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
  // else if (newItem === []) return null;
};
export const addItemToGuestCart = item => dispatch => {
  let existingGuestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
  // const newGuestItemID = uuid();
  // item.guestItemID = uuidv4() + shortid.generate();

  existingGuestCart.push(item);
  localStorage.setItem("guestCart", JSON.stringify(existingGuestCart));

  dispatch({
    type: ADD_ITEM_TO_GUEST_CART,
    payload: item
  });
};

export const getGuestCartItems = () => dispatch => {
  let existingGuestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
  dispatch({
    type: GET_GUEST_CART,
    payload: existingGuestCart
  });
};

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
export const clearGuestCart = () => dispatch => {
  localStorage.clear();
  let existingGuestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
  localStorage.setItem("guestCart", JSON.stringify(existingGuestCart));

  dispatch({
    type: CLEAR_GUEST_CART
  });
};
export const clearUserCart = (user, items) => (dispatch, getState) => {
  // let existingGuestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
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
// export const handleShow = item => {
//   return {
//     type: SHOW_MORE,
//     payload: item
//   };
// };
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
