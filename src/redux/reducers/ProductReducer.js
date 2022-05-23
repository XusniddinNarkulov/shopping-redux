import { removeSelectedProduct } from "../actions/ProductAction";
import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
   products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case ActionTypes.SET_PRODUCT:
         return { ...state, products: payload };

      default:
         return state;
   }
};

export const selectedProductReducer = (
   state = initialState,
   { type, payload }
) => {
   if (type === ActionTypes.SELECTED_PRODUCT) {
      return { ...state, ...payload };
   }
   if (type === ActionTypes.REMOVE_SELECTED_PRODUCT) {
      return {};
   }
   return state;
};
