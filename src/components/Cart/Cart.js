import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsTrashFill } from "react-icons/bs";

const Cart = (props) => {
  const { setCartIcon, cd, setCd } = props;
  const [total, setTotal] = useState(0);

  const sum = cd.reduce((item1, item2) => {
    const num = Number(item2.price.replace("$", ""));
    return item1 + num;
  }, 0);
  console.log(sum);
  return (
    <>
      <div
        class="modal fade mt-5"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block", opacity: "1" }}
      >
        <div class="modal-dialog mt-5" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Added items
              </h5>
              <button
                type="button"
                class="close btn-danger"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setCartIcon(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {cd.map((items, index) => {
                const p = items.price.replaceAll("$", "Rs.");
                const num = Number(items.price.replace("$", ""));
                // console.log(num);

                // setTotal(num);

                return (
                  <>
                    <div>
                      <div class="modal-body d-flex justify-content-between">
                        <img
                          src={`https://electronic-ecommerce.herokuapp.com/${items.image}`}
                          style={{ width: "10rem" }}
                        />
                        <div>{p} </div>
                        <button
                          className="btn-sm"
                          style={{
                            backgroundColor: "white",
                            height: "35px",
                            borderRadius: "15px",
                            border: "2px solid red",
                          }}
                        >
                          <BsTrashFill
                            onClick={() => {
                              let data = [...cd];
                              data.splice(index, 1);
                              setCd(data);
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                total: {sum}
              </button>
              <button type="button" class="btn btn-success">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
