import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
/*export const addCartProduct = () => {
  return {
    type: ActionTypes.ADD,
  };
};
export const removeCartProduct = () => {
  return {
    type: ActionTypes.REMOVE,
  };
};
export const increaseCartProduct = () => {
  return {
    type: ActionTypes.INCREASE,
  };
};export const decreaseCartProduct = () => {
  return {
    type: ActionTypes.DECREASE,
  };
};*/
