import { filterProducts } from "../Actions/FilterProducts";
import {
  FILTER_PRODUCTS,
  PRODUCT_LIST_FETCHING,
  PRODUCT_LIST_SUCCESS,
} from "../Constants/Constants";

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  filterProducts: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case FILTER_PRODUCTS:
      console.log(action.filters);

      return {
        ...state,
        filterProducts: action.filters,
      };

    //  state.products.product.map((product) => {
    //   if (product.belongsTo.includes()) {
    //     filterProducts.push(product)
    //   }
    // });
    // return {
    //   ...state,
    //   filterProducts,
    // };

    default:
      return state;
  }
};

export default reducer;
