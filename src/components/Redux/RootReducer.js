import { combineReducers } from "redux";
import productReducer from "../Redux/Reducer/ProductReducer";
import CounterReducer from "../Redux/Reducer/CounterReducer";
import CLickAddToCartReducer from "../Redux/Reducer/ClickAddToCartReducer";

export const rootReducer = combineReducers({
  product: productReducer,
  count: CounterReducer,
  click: CLickAddToCartReducer,
});

export default rootReducer;
