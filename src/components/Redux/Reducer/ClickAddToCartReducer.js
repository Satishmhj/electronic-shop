import { CLICK, REMOVEFROMCART } from "../Constants/Constants";

const INITIAL_STATE = {
  click: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLICK:
      return {
        ...state,
        click: state.click + 1,
      };
    case REMOVEFROMCART:
      return {
        ...state,
        click: state.click - 1,
      };

    default:
      return state;
  }
};

export default reducer;
