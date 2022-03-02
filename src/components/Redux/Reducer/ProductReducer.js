import { PRODUCT_lIST } from "../Constants/Constants";

const INITIAL_STATE = {
  products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_lIST:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
