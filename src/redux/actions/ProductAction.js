import { ActionTypes } from "../constants/ActionTypes";

export const setProduct = (products) => {
   return {
      type: ActionTypes.SET_PRODUCT,
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

export const addToCartAction = (itemID) => {
   return {
      type: ActionTypes.ADD_TO_CART,
      payload: { id: itemID },
   };
};

export const removeFromCartAction = (itemID) => {
   return {
      type: ActionTypes.REMOVE_FROM_CART,
      payload: { id: itemID },
   };
};

export const itemQuantityAction = (itemID, value) => {
   return {
      type: ActionTypes.ITEM_QUANTITY,
      payload: { id: itemID, quantity: value },
   };
};
