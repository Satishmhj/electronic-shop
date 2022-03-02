import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./components/Redux/Actions/ProductAction";

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
    </div>
  );
}

export default App;
