import { combineReducers } from "redux";
import {
   productReducer,
   selectedProductReducer,
   // cartReducer,
} from "./ProductReducer";

export const reducers = combineReducers({
   productReducer,
   selectedProductReducer,
   // cartReducer,
});
