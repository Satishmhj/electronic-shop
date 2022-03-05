import { combineReducers } from "redux";
import productReducer from '../Redux/Reducer/ProductReducer';
import CounterReducer from '../Redux/Reducer/CounterReducer'

export const rootReducer = combineReducers({
    product: productReducer,
    count: CounterReducer,
});

export default rootReducer;