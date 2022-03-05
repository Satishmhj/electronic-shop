import { DECREMENT, INCREMENT } from "../Constants/Constants";

export const IncrementCounter = (product) => {
  return {
    type: INCREMENT,
    product,
  };
};
export const DecrementCounter = (product) => {
  return {
    type: DECREMENT,
    product,
  };
};

export default { IncrementCounter, DecrementCounter };
