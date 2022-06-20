// import { removeSelectedProduct } from "../actions/ProductAction";
import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
   products: [],
   cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case ActionTypes.SET_PRODUCT:
         return { ...state, products: payload };

      case ActionTypes.ADD_TO_CART:
         const item = state.products.find(
            (product) => product.id === payload.id
         );
         const inCart = state.cart.find((item) =>
            item.id === payload.id ? true : false
         );
         return {
            ...state,
            cart: inCart
               ? state.cart.map((item) =>
                    item.id === payload.id
                       ? { ...item, quantity: item.quantity + 1 }
                       : item
                 )
               : [...state.cart, { ...item, quantity: 1 }],
         };
      case ActionTypes.REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter((item) => item.id !== payload.id),
         };
      case ActionTypes.ITEM_QUANTITY:
         return {
            ...state,
            cart: state.cart.map((item) =>
               item.id === payload.id
                  ? { ...item, quantity: payload.quantity }
                  : item
            ),
         };
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
   // if (type === ActionTypes.REMOVE_SELECTED_PRODUCT) {
   //    return {};
   // }
   return state;
};

// export const cartReducer = (state = initialState, { type, payload }) => {
//    switch (type) {
//       case ActionTypes.ADD_TO_CART:
//          const item = state.products.find(
//             (product) => product.id === payload.id
//          );
//          const inCart = state.cart.find((item) =>
//             item.id === payload.id ? true : false
//          );
//          return {
//             ...state,
//             cart: inCart
//                ? state.cart.map((item) =>
//                     item.id === payload.id
//                        ? { ...item, quantity: item.quantity + 1 }
//                        : item
//                  )
//                : [...state.cart, { ...item, quantity: 1 }],
//          };
//       case ActionTypes.REMOVE_FROM_CART:
//          return {};
//       case ActionTypes.ITEM_QUANTITY:
//          return {};
//       default:
//          return state;
//    }
// };
