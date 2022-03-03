import React from "react";
import { useSelector } from "react-redux";
import "../Product/Product";
import { FaFilter } from "react-icons/fa";

const Product = () => {
  const product = useSelector((state) => state.product.products);

  return (
    <>
      <div className="container">
        <div
          className="product d-flex justify-content-between"
          style={{ marginTop: "80px" }}
        >
          <b>PRODUCT</b>
          <button className="btn btn-outline-primary">
            <FaFilter />
            Filter
          </button>
        </div>
        <div className="row">
          {product?.map((items) => {
            const p = items.price.replaceAll("$", "Rs.");

            const d = new Date(items.createDate);
            d.toLocaleDateString();
            const date = d.toLocaleDateString().replaceAll("/", "-");
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
                        <button type="button" class="btn btn-outline-info">
                          -
                        </button>
                        <button type="button" class="btn btn-outline-info">
                          0
                        </button>
                        <button type="button" class="btn btn-outline-info">
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
                      <button type="button" class="btn btn-primary">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
