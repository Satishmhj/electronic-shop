import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "./components/Redux/Actions/ProductAction";
import Product from "./components/Product/Product";
import CheckOut from "./components/CheckOut/CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [cartDetail, setCartDetail] = useState(false);
  const [filter, setFilter] = useState(false);
  const [cartIcon, setCartIcon] = useState(false);
  const [cd, setCd] = useState([]);
  const [check, setCheck] = useState(false);

  const products = useSelector((state) => state.product.products);
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
     
    </div>
  );
}

export default App;
