import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./ProductReducer";

export const reducers = combineReducers({
   productReducer,
   selectedProductReducer,
});
