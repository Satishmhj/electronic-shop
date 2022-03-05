import { PRODUCT_lIST, PRODUCT_LIST_FETCHING, PRODUCT_LIST_SUCCESS} from "../Constants/Constants";

export const fetchData = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_FETCHING,
  });

  let res = await fetch(
    "https://electronic-ecommerce.herokuapp.com/api/v1/product"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  dispatch({
    type: PRODUCT_LIST_SUCCESS,
    payload: res.data.product,
  });
};
