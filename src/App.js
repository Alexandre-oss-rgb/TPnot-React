import { useState } from "react";
import ListContainer from "./components/ListContainer";
import Cart from "./views/Tp1V2/Cart/Cart";
import ProductList from "./views/Tp1V2/ProductList";
import UserForm from "./views/Tp2/Form";
import CreateCard from "./views/TP3/CreateCard";
import CardList from "./views/TP3/CardList";
import ReadCard from "./views/TP3/ReadCard";

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <>
      {/* <ProductList />
      <Cart /> */}
      {/* <button onClick={() => setDisplayForm(!displayForm)}>Create a User</button>
      {displayForm && <UserForm />} */}
      <button onClick={() => setDisplayForm(!displayForm)}>Cards Manager</button>
      {displayForm && <CardList />}
    </>

  );
}

export default App;