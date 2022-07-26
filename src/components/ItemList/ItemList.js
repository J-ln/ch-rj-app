import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemList.scss";
import { useParams } from "react-router";
import { getAllProducts, getProductsCategory } from "../../services/firebase/firebase";


const ItemList = () => {
    const { id } = useParams();
    const [itemsList, setItems] = useState([]);

    useEffect(() => {
        setItems([]);
        if (id) {
            getProductsCategory("items", id)
                .then((result) => {
                    let products = result
                    setItems(products)
                }).catch((err) => {
                    console.log(err)
                });
        } else {
            getAllProducts("items")
                .then((result) => {
                    let products = result
                    setItems(products)
                }).catch((err) => {
                    console.log(err)
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
