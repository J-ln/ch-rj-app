import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./NavButton.scss";

const NavButton = ({ text, drop }) => {
    const [openDrop, setOpen] = useState(false);
    return (
        <li
            className="NavButton"
            onClick={() => {
                setOpen(!openDrop);
            }}
            drop={drop}>
            <div className="NavLink">
                {text}
                {drop ? <ExpandMoreIcon className="NavLinkIcon" /> : ""}
            </div>
            {drop && openDrop ? <Dropdown /> : ""}
        </li>
    );
};

export default NavButton;
