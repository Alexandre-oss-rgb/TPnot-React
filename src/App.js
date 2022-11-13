import { useState } from "react";
import CreateCard from "./views/TP3/CreateCard";
import DeleteCard from "./views/TP3/DeleteCard";
import CardList from "./views/TP3/CardList";
import "./App.css";

function App() {
  const [displayForm, setDisplayForm] = useState(true);

  const [cards, setCards] = useState([]);

  const [cardData, setCardData] = useState({
    name: "",
    CMC: 0,
    ruletext: "",
    type: "",
    attack: 0,
    defense: 0,
    rarity: "",
    color: "",
    price: 0,
    stock: 0,
  });

  async function getCards() {
    await fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }

  return (
    <>
      {/* Create & Update function */}
      <button onClick={() => setDisplayForm(!displayForm)}>
      Ajouter ou Modifier une carte
      </button>
      {displayForm && (
        <CreateCard
          cardData={cardData}
          setCardData={setCardData}
          getCards={getCards}
          cards={cards}
        />
      )}

      {/* Delete function */}

      <DeleteCard getCards={getCards} />

      {/* Read function */}
      <CardList cards={cards} setCards={setCards} getCards={getCards} />

      {/* <ProductList />
      <Cart /> */}
      {/* <button onClick={() => setDisplayForm(!displayForm)}>Create a User</button>
      {displayForm && <UserForm />} */}
    </>
  );
}

export default App;
