import { useEffect } from "react";

export default function CardList({ cards, setCards, getCards }) {
  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <h1>Liste des cartes</h1>
      {cards.map((card) => (
        <div className="displayRead" key={card.id}>
          <p>Nom : {card.name} - </p>
          <p>Coût en mana : {card.CMC} - </p>
          <p>Ruletext : {card.ruletext} - </p>
          <p>Type : {card.type} - </p>
          <p>Attack : {card.attack} - </p>
          <p>Défense : {card.defense} - </p>
          <p>Rareté : {card.rarity} - </p>
          <p>Couleur : {card.color} - </p>
          <p>Prix : {card.price} - </p>
          <p>En stock : {card.stock} - </p>
          <p>Id : {card.id}</p>
        </div>
      ))}
    </>
  );
}
