import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../services/products";
import { useParams } from "react-router";

function getItem(id) {
    return new Promise((resolve) => {
        const item = products.find((product) => product.id === id);
        setTimeout(() => resolve(item), 2000)
    })
};



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const itemRequest = getItem(id)
        itemRequest.then(result => {
            const item = result
            setItem(item)
        })
            ;
    }, [id]);
    return (
        <div className="SectionDetailContainer">
            <ItemDetail
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                pictureUrl={item.pictureUrl}
                stock={item.stock}
            />
        </div>
    );
};

export default ItemDetailContainer;
