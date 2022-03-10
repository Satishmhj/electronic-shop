import { FILTER_PRODUCTS } from "../Constants/Constants";

export const filterProducts = (filters) => {
  return {
    type: FILTER_PRODUCTS,
    filters,
  };
};
