import { PRODUCT_lIST } from "../Constants/Constants";

export const fetchData = () => async (dispatch) => {
  let res = await fetch(
    "https://electronic-ecommerce.herokuapp.com/api/v1/product"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  dispatch({
    type: PRODUCT_lIST,
    payload: res.data.product,
  });
};
