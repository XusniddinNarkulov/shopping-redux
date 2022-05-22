import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
   product: [{ id: 1, title: "Neo", category: "react" }],
};

export const productReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case ActionTypes.SET_PRODUCT:
         return state;
      default:
         return state;
   }
};
