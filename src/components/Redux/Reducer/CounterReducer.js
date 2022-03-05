import { DECREMENT, INCREMENT } from "../Constants/Constants";

const INITIAL_STATE = {
  count: [],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      let count = [...state.count];
      let c = count.findIndex((item) => item.id == action.product.id);

      if (c == -1) {
        c = { id: action.product.id, count: 1 };
        count.push(c);
      } else {
        let cc = count[c];
        if (action.product.stock > cc.count) {
          cc.count++;
          count[c] = cc;
        } else {
          alert("no stock left");
        }
      }
      return {
        ...state,
        count,
      };
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
    case DECREMENT:
      // debugger
      let count1 = [...state.count];
      let c1 = count1.findIndex((item) => item.id == action.product.id);
      if (c1 == -1) {
        c1 = { id: action.product.id, count: 1 };
        count1.push(c1);
      } else {
        let cc1 = count1[c1];
        if (cc1.count == 0) {
          alert("Cannot be less than zero");
        } else {
          cc1.count--;
          count1[c1] = cc1;
        }
      }
      return {
        ...state,
        count: count1,
      };
    default:
      return state;
  }
};

export default reducer;
