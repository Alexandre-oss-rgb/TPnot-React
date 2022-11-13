import React from "react";
import { useState } from "react";

export default function DeleteCard({ getCards }) {
  const [id, setId] = useState(0);

  async function deleteCard() {
    console.log("test");
    await fetch("http://localhost:5000/products/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    getCards();
  }

  function submitForm(event) {
    event.preventDefault();
    deleteCard();
  }

  return (
    <div>
      <h1>Supprimer une carte</h1>
      <form onSubmit={submitForm}>
        <label>
          Veuillez entrer l'id de la carte à supprimer :
          <br />
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <input type="submit" value="Supprimer" />
      </form>
    </div>
  );
}
