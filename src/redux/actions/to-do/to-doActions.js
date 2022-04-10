import { ADD_TO_LIST } from "../../types/to-do/to-doTypes";

export const todoAdd = (item) => {
  return {
    type: ADD_TO_LIST,
    payload: item,
  };
};
