import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ADD_ITEM_TO_CART
} from "../actions/types";

const initialState = {
  items: [
    // {
    //   name: "",
    //   description: "",
    //   category: "",
    //   price: null,
    //   userRefID: "",
    //   productImage: ""
    // }
  ],
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
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };

    // case SHOW_MORE:
    //   // const { showMore } = state.items;

    //   return {
    //     ...state,
    //     items: state.items.map(item => {
    //       if (item._id === action.payload)
    //         return {
    //           ...item,
    //           showMore: !item.showMore
    //         };

    //       return item;
    //     })
    //   };
    default:
      return state;
  }
}
