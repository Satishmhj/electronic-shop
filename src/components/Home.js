import React, { useEffect, useState } from "react";
import "../App.scss";
import Navbar from "./Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./Redux/Actions/ProductAction";
import Product from "./Product/Product";
import CheckOut from "./CheckOut/CheckOut";
import { Link, Route, Routes } from "react-router-dom";

const Home = () => {
  const [cartDetail, setCartDetail] = useState(false);
  const [filter, setFilter] = useState(false);
  const [cartIcon, setCartIcon] = useState(false);
  const [cd, setCd] = useState([]);
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <Navbar
        cd={cd}
        setCd={setCd}
        cartDetail={cartDetail}
        setCartDetail={setCartDetail}
        setCartIcon={setCartIcon}
        cartIcon={cartIcon}
      />
      {/* <CheckOut/> */}
      <Routes>
        <Route path="/checkout" element={<CheckOut />}/>

        <Route
          path="/"
          element={
            <Product
              filter={filter}
              setFilter={setFilter}
              cd={cd}
              setCd={setCd}
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Home;
