import React from "react";
import "./CartWidget.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartSharp";

const CartWidget = (props) => {
    return (
        <div className="CartWidget">
            <ShoppingCartIcon className="Icon" />
            <span className="Counter">{props.count}</span>
        </div>
    );
};

export default CartWidget;
