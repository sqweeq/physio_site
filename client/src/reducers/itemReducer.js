import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_GUEST_CART,
  DELETE_FROM_GUEST_CART,
  GET_GUEST_CART,
  CLEAR_GUEST_CART,
  CLEAR_USER_CART
} from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case GET_GUEST_CART:
      return {
        ...state,
        guestCart: action.payload
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEM:
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ADD_ITEM_TO_GUEST_CART:
      return {
        ...state,
        guestCart: [action.payload, ...state.guestCart]
      };
    case DELETE_FROM_GUEST_CART:
      return {
        ...state,
        guestCart: state.guestCart.filter(
          item => item.guestItemID !== action.payload.guestItemID
        )
      };
    case CLEAR_USER_CART:
      return {
        ...state,
        items: state.items.filter(item => item.userRefID !== action.payload)
      };
    case CLEAR_GUEST_CART:
      return {
        ...state,
        guestCart: []
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
