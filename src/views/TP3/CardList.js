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
          <p>{card.name};</p>
          <p>{card.CMC};</p>
          <p>{card.ruletext};</p>
          <p>{card.type};</p>
          <p>{card.attack};</p>
          <p>{card.defense};</p>
          <p>{card.rarity};</p>
          <p>{card.color};</p>
          <p>{card.price};</p>
          <p>{card.stock};</p>
        </div>
      ))}
    </>
  );
}
