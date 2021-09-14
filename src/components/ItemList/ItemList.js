import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemList.scss";

const products = [
    { id: "1", title: "Prueba", price: "7777", pictureUrl: "", stock: 50 },
    { id: "2", title: "Prueba2", price: "7577", pictureUrl: "", stock: 30 },
    { id: "3", title: "Prueba3", price: "7757", pictureUrl: "", stock: 45 },
    { id: "4", title: "Prueba4", price: "7775", pictureUrl: "", stock: 25 },
];

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
        console.log(products);
    });
}

const ItemList = () => {
    const [itemsList, setItems] = useState([]);

    useEffect(() => {
        const products = getProducts();
        products.then((result) => {
            setItems(result);
            console.log(result);
        });
        console.log(products);
    }, []);

    return (
        <ul className="ItemCardsContainer">
            {itemsList.map((item) => (
                <Item
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                    stock={item.stock}
                />
            ))}
        </ul>
    );
};

export default ItemList;
