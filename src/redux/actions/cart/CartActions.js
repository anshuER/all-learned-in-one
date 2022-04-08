import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_TO_CART,
  REMOVE_ALL_ITEM,
} from "../../types/cart/CartTypes";

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const deleteItemFromCart = (item) => {
  return {
    type: DELETE_ITEM_TO_CART,
    payload: item,
  };
};

export const removeAllItems = (item) => {
  return {
    type: REMOVE_ALL_ITEM,
    payload: item,
  };
};
