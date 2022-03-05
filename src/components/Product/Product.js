import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Product/Product";
import Filter from "../Filter/Filter";
import Loader from "../Loader/Loader";
import { IncrementCounter, DecrementCounter } from "../Redux/Actions/Counter";

const Product = (props) => {
  const { filter, setFilter, cd, setCd } = props;

  const product = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const count = useSelector((state) => state.count.count);


  console.log(count);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(IncrementCounter(), DecrementCounter())
  // }, []);

  // console.log(dispatch());

  return (
    <>
      {filter && <Filter filter={filter} setFilter={setFilter} />}

      <div className="container">
        <div
          className="product d-flex justify-content-between"
          style={{ marginTop: "80px" }}
        >
          <b>PRODUCT</b>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFilter(!filter);
            }}
          >
            filter
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row">
            {product?.map((items) => {
              const p = items.price.replaceAll("$", "Rs.");

              const d = new Date(items.createDate);
              d.toLocaleDateString();
              const date = d.toLocaleDateString().replaceAll("/", "-");

              let a = count.find((item)=>item.id == items.id)


              return (
                <>
                  <div key={items.id} className="col-3 mt-3">
                    <div class="card">
                      <img
                        class="card-img-top"
                        src={`https://electronic-ecommerce.herokuapp.com/${items.image}`}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <div
                          class="btn-group justify-content-end"
                          role="group"
                          style={{ float: "right" }}
                        >
                          <button type="button" class="btn btn-outline-info" onClick={()=> {
                            dispatch(DecrementCounter(items))
                          }}>
                            -
                          </button>
                          <button type="button" class="btn btn-outline-info">
                            { !a ? 0 : a.count}
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info"
                            onClick={() => {
                              dispatch(IncrementCounter(items))
                            }}
                          >
                            +
                          </button>
                        </div>
                        <br />
                        <br />
                        <b class="card-title">{items.name}</b>
                        <p class="card-text">
                          <b>Price: {p}</b>
                          <span style={{ float: "right", color: "green" }}>
                            {" "}
                            <small>Stocks left: {items.stock}</small>
                          </span>
                          <b>Released on: {date}</b>
                        </p>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            let data = [...cd];
                            data.push(items);
                            setCd(data);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
