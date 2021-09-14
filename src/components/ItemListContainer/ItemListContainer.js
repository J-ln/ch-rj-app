import React from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";

const ItemListContainer = ({ title }) => {
    return (
        <div className="SectionItemContainer">
            <div className="ItemTitle">{title}</div>
            <ItemList />
        </div>
    );
};

export default ItemListContainer;
