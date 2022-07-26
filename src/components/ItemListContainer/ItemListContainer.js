import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";

const ItemListContainer = ({ title }) => {
    const { id } = useParams();
    const [secTitle, setTitle] = useState("")
    useEffect(() => {
        id ? setTitle(id) : setTitle(title)
    }, [id])

    return (
        <div className="SectionItemContainer">
            <div className="ItemTitle">{secTitle}</div>
            <ItemList />
        </div>
    );
};

export default ItemListContainer;
