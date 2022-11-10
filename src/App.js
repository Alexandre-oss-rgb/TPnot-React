import { useState } from "react";
import ListContainer from "./components/ListContainer";
import Cart from "./views/Tp1V2/Cart/Cart";
import ProductList from "./views/Tp1V2/ProductList";

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <>
      <ProductList />
      <Cart />
    </>

  );
}

export default App;