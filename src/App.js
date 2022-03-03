import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./components/Redux/Actions/ProductAction";
import Product from "./components/Product/Product";

function App() {
  const products = useSelector((state) => state.product.products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Product products={products}/>
    </div>
  );
}

export default App;
