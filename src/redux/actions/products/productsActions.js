import { GET_PRODUCTS } from "../../types/products/productsType";

export const getProduct = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};
