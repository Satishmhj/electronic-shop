import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  // console.log(products)

  const location = useLocation();
  console.log(location.state.items);
  const { image, name, price, stock, category } = location.state.items;

  const p = price.replaceAll("$", "Rs.");

  return (
    <>
      <div
        className="display-4 text-success  text-center"
        style={{ marginTop: "70px" }}
      >
        Product Detail Page
      </div>
      <div className="container d-flex justify-content-center mt-4">
        <img
          src={`https://electronic-ecommerce.herokuapp.com/${image}`}
          style={{ width: "30rem" }}
        />
        <div className="d-flex flex-column p-4">
          <b className="display-1">{name}</b>
          <b className="display-4">Price: {p}</b>
          <b className="display-4 text-success">Stock left: {stock}</b>
          <b className="display-5">description:{category}</b>
        </div>
      </div>
      <div className="container d-flex justify-content-center mt-5">
        <button className="btn btn-primary btn-lg" onClick={()=> {alert("buying process....")}}>Buy</button>
      </div>
    </>
  );
};

export default ProductDetail;
