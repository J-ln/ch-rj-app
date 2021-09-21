import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemList.scss";
import { products } from "../../services/products";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "../ItemDetail/ItemDetail";

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
    });
}

const ItemList = () => {
    const [itemsList, setItems] = useState([]);
    const [Detail, setDetail] = useState({
        item: {
            id: "Loading",
            title: "Loading",
            price: "Loading",
            pictureUrl: "Loading",
            stock: "Loading",
        },
        show: false,
        toShow: "",
    });

    useEffect(() => {
        const products = getProducts();
        products.then((result) => {
            setItems(result);
        });
    }, []);

    function getItem() {
        const ToShowItem = itemsList.find((item) => item.id === Detail.toShow);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(ToShowItem), 2000);
        });
    }

    function handleClick(id) {
        console.log(id);
        setDetail({ toShow: toString(id) });
        console.log(Detail.toShow);
    }

    useEffect(() => {
        if (Detail.toShow !== "") {
            const id = Detail.toShow;
            const ToShowItem = getItem(id);
            console.log(ToShowItem);
            ToShowItem.then((result) => {
                console.log(result);
                setDetail({ item: result });
            }).then(() => {
                setDetail({ show: true });
            });
        }
    }, [Detail.toShow]);
    console.log(Detail.item);
    return (
        <ul className="ItemCardsContainer">
            {itemsList.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                    // stock={item.stock}
                    showItem={(id) => {
                        handleClick(id);
                    }}
                />
            ))}
            {/* {Detail.show === true ? ( */}
            <ItemDetailContainer>
                <ItemDetail
                    key={Detail.item.id}
                    title={Detail.item.title}
                    price={Detail.item.price}
                    pictureUrl={Detail.item.pictureUrl}
                    stock={Detail.item.stock}
                />
            </ItemDetailContainer>
            {/* ) : (
                ""
            )} */}
        </ul>
    );
};
export default ItemList;
