import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../services/products";
import { useParams } from "react-router";

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
    });
}

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const products = getProducts();
        products.then((result) => {
            const item = result.find((product) => product.id === id);
            setItem(item);
        });
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
