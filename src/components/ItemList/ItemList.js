import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemList.scss";
import { products } from "../../services/products";
import { useParams } from "react-router";

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
    });
}

const ItemList = () => {
    const { id } = useParams();
    const [itemsList, setItems] = useState([]);

    useEffect(() => {
        console.log(id);
        setItems([]);
        const products = getProducts();
        if (id) {
            products.then((result) => {
                const filter = result.filter(
                    (product) => product.category === id
                );
                setItems(filter);
            });
        } else {
            products.then((result) => {
                setItems(result);
            });
        }
    }, [id]);

    // useEffect(() => {
    //     const products = getProducts();
    //     products.then((result) => {
    //         setItems(result);
    //     });
    // }, []);

    // if (isCategory) {
    //     const filterList = itemsList.filter((item) => item.category === id);
    //     return (
    //         <ul className="ItemCardsContainer">
    //             {filterList.map((item) => (
    //                 <Item
    //                     key={item.id}
    //                     id={item.id}
    //                     title={item.title}
    //                     price={item.price}
    //                     pictureUrl={item.pictureUrl}
    //                 />
    //             ))}
    //         </ul>
    //     );
    // }

    return (
        <ul className="ItemCardsContainer">
            {itemsList.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                />
            ))}
        </ul>
    );
};
export default ItemList;
