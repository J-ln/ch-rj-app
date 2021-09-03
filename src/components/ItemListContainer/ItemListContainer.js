import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./ItemListContainer.scss";

const ItemListContainer = (props) => {
    return (
        <div className="SectionItemContainer">
            <div className="ItemTitle">{props.title}</div>
            <div className="ItemCardsContainer">
                <CardProduct name="Prueba" price="$7777" />
                <CardProduct name="Prueba" price="$7777" />
                <CardProduct name="Prueba" price="$7777" />
            </div>
        </div>
    );
};

export default ItemListContainer;
