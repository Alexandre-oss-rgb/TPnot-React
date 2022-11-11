import React from "react";
import { useState } from "react";


export default function CreateCard() {
    const [name, setName] = useState("");
    const [CMC, setCMC] = useState(0);
    const [ruletext, setRuletext] = useState("");
    const [type, setType] = useState("");
    const [attack, setAttack] = useState(0);
    const [life, setLife] = useState(0);
    const [rarity, setRarity] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    function addCard() {
        console.log("test");
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                CMC: CMC,
                ruletext: ruletext,
                type: type,
                attack: attack,
                life: life,
                rarity: rarity,
                color: color,
                price : price,
                stock : stock,
                }),
        })
        .then((response) => response.json())
    }

    function submitForm(event) {
        event.preventDefault();
        addCard();
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                </label>
                <label>
                    CMC:
                    <input type="number" value={CMC} onChange={(e) => setCMC(e.target.value)} />
                    <br />
                </label>
                <label>
                    Ruletext:
                    <input type="text" value={ruletext} onChange={(e) => setRuletext(e.target.value)} />
                    <br />
                </label>
                <label>
                    Type:
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                    <br />
                </label>
                <label>
                    Attack:
                    <input type="number" value={attack} onChange={(e) => setAttack(e.target.value)} />
                    <br />
                </label>
                <label>
                    Life:
                    <input type="number" value={life} onChange={(e) => setLife(e.target.value)} />
                    <br />
                </label>
                <label>
                    Rarity:
                    <input type="text" value={rarity} onChange={(e) => setRarity(e.target.value)} />
                    <br />
                </label>
                <label>
                    Color:
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                    <br />
                </label>
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <br />
                </label>
                <label>
                    Stock:
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                    <br />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}



