import { addItem, deleteItem } from "../../function/cartFunctio";
import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_TO_CART,
  REMOVE_ALL_ITEM,
} from "../../types/cart/CartTypes";

const initialState = {
  cartItems: []
};

export const CartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case DELETE_ITEM_TO_CART:
      return {
        ...state,
        cartItems: deleteItem(state.cartItems, action.payload),
      };
    case REMOVE_ALL_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id != action.payload.id
        ),
      };

    default:
      return state;
  }
};
