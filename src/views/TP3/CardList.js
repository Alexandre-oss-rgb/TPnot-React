import CreateCard from "./CreateCard";
import ReadCard from "./ReadCard";
import DeleteCard from "./DeleteCard";
import UpdateCard from "./UpdateCard";
import { useEffect, useState } from "react";
import ListContainer from "../../components/ListContainer";

function cardItem({ item }) {
  return (
    <div>
      {item.name} - {item.price}€ - {item.stock} in stock
    </div>
  );
}

export default function Cart() {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then((data) => {
            setCards(data);
        });
    }, []);



    const deleteCard = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => {
            setCards(cards.filter((card) => card.id !== id));
        });
    };

    const updateCard = (card) => {
        fetch(`http://localhost:5000/products/${card.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(card),
        })
        .then((response) => response.json())
        .then((data) => {
            setCards(
                cards.map((card) => {
                    if (card.id === data.id) {
                        return data;
                    }
                    return card;
                })
            );
        });
    };

    return (
        <>
        <h1>Cards</h1>
        <CreateCard/>
        {/* <DeleteCard/>
        <UpdateCard/>
        <ReadCard/> */}
        <ListContainer
            initialItems={cards}
            ListItem={cardItem}
            availableActions={{}}
        />
        </>
    );
    }