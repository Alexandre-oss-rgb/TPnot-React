import { useState, useEffect } from "react";

export default function CreateCard({ cardData, setCardData, getCards, cards }) {

  const [id, setId] = useState(0);

  const [check, setCheck] = useState(false);

  //ajouter une carte
  async function addCard() {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...cardData }),
    }).then((response) => response.json());
    getCards();
  }

  //check si l'utilisateur veut ajouter ou modifier une carte
  function submitForm(event) {
    event.preventDefault();
    if (!check) {
      addCard();
    } else {
      editCard();
    }
  }

  //modifier une carte    
  async function getCardtoEdit() {
    await fetch("http://localhost:5000/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCardData(data);
      });
  }

  async function editCard() {
    await fetch("http://localhost:5000/products/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...cardData }),
    }).then((response) => response.json());
    getCards();
  }

  useEffect(() => {
    if (id !== 0) {
      getCardtoEdit();
      setCheck(true);
    }
  }, [id]);

  return (
    <div>
    { check ? <h1>Modifier une carte</h1> : <h1>Ajouter une carte</h1> }
      <form onSubmit={submitForm}>
        <label>
          Name : 
          <input
            type="text"
            value={cardData.name}
            onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
          />
          <br />
        </label>
        <label>
          CMC : 
          <input
            type="number"
            value={cardData.CMC}
            onChange={(e) => setCardData({ ...cardData, CMC: e.target.value })}
          />
          <br />
        </label>
        <label>
          Ruletext : 
          <input
            type="text"
            value={cardData.ruletext}
            onChange={(e) =>
              setCardData({ ...cardData, ruletext: e.target.value })
            }
          />
          <br />
        </label>
        <label>
          Type : 
          <input
            type="text"
            value={cardData.type}
            onChange={(e) => setCardData({ ...cardData, type: e.target.value })}
          />
          <br />
        </label>
        <label>
          Attack : 
          <input
            type="number"
            value={cardData.attack}
            onChange={(e) =>
              setCardData({ ...cardData, attack: e.target.value })
            }
          />
          <br />
        </label>
        <label>
          Life : 
          <input
            type="number"
            value={cardData.defense}
            onChange={(e) =>
              setCardData({ ...cardData, defense: e.target.value })
            }
          />
          <br />
        </label>
        <label>
          Rarity : 
          <input
            type="text"
            value={cardData.rarity}
            onChange={(e) =>
              setCardData({ ...cardData, rarity: e.target.value })
            }
          />
          <br />
        </label>
        <label>
          Color : 
          <input
            type="text"
            value={cardData.color}
            onChange={(e) =>
              setCardData({ ...cardData, color: e.target.value })
            }
          />
          <br />
        </label>
        <label>
          Price : 
          <input
            type="number"
            value={cardData.price}
            onChange={(e) =>
              setCardData({ ...cardData, price: e.target.value })
            }
          />
          <br />
        </label>
        <label>
          Stock : 
          <input
            type="number"
            value={cardData.stock}
            onChange={(e) =>
              setCardData({ ...cardData, stock: e.target.value })
            }
          />
          <br />
        </label>
        <input type="submit" value={check ? "Modifier" : "Ajouter"}  />
      </form>
      <br />
      <form>
        <label>
          Veuillez entrer l'id de la carte à modifier :
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
        </label>
      </form>
    </div>
  );
}
