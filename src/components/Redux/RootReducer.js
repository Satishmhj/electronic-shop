import { combineReducers } from "redux";
import productReducer from '../Redux/Reducer/ProductReducer';

export const rootReducer = combineReducers({
    product: productReducer,
});

export default rootReducer;