import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "./components/Redux/Actions/ProductAction";
import Product from "./components/Product/Product";
import CheckOut from "./components/CheckOut/CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
 

  const products = useSelector((state) => state.product.products);
  // console.log(products);

 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
