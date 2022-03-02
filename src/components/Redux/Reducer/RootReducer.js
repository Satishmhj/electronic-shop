import { combineReducers } from "redux";
import productReduce from '../ProductReducer';

export const rootReducer = combineReducers({
    product: productReduce,
});

export default rootReducer;