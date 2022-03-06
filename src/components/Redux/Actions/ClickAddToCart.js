import { CLICK, REMOVEFROMCART } from "../Constants/Constants";

export const CLickAddToCart = () => (dispatch) => {
    
  dispatch({
    type: CLICK,
  });

  
};
export const RemoveFromCart = () => (dispatch) => {
    
  dispatch({
    type: REMOVEFROMCART,
  });


};
