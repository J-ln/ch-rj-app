import React from "react";
import "./ItemDetailContainer.scss";

const ItemDetailContainer = (props) => {
    return <div className="SectionDetailContainer">{props.children}</div>;
};

export default ItemDetailContainer;
