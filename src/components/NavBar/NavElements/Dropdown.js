import React from "react";
import "./Dropdown.scss";
import { NavLink, generatePath } from "react-router-dom";

const Dropdown = () => {
    return (
        <ul className="Dropdown">
            <NavLink to="/category">
                <li className="DropdownLinks">Show all</li>
            </NavLink>
            <NavLink
                key={"shirts"}
                to={generatePath(`/category/:id`, {
                    id: "shirts",
                })}>
                <li className="DropdownLinks">Shirts</li>
            </NavLink>
            <NavLink
                key={"shorts"}
                to={generatePath(`/category/:id`, {
                    id: "shorts",
                })}>
                <li className="DropdownLinks">Shorts</li>
            </NavLink>
        </ul>
    );
};

export default Dropdown;
