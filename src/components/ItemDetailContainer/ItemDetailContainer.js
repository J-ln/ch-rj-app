import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../services/products";
import { useParams } from "react-router";

function getItem(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
        products.then((result) => {
            const item = result.find((product) => product.id === id);
            return item
        })


    });
}

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(getItem(id));
    }, [id]);
    return (
        <div className="SectionDetailContainer">
            <ItemDetail
                key={item.id}
                title={item.title}
                price={item.price}
                pictureUrl={item.pictureUrl}
                stock={item.stock}
            />
        </div>
    );
};

export default ItemDetailContainer;
