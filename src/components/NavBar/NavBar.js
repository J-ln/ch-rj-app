import React from "react";
import "./NavBar.scss";
import logo from "./Logo.svg";
import NavButton from "../NavElements/NavButton";
import CartWidget from "../NavElements/CartWidget";

const Navbar = () => {
    return (
        <nav className="NavBar">
            <img className="Logo" src={logo} alt="" />
            <div className="NavButtonList">
                <NavButton text="Home" />
                <NavButton text="Products" />
                <NavButton text="Contact" />
            </div>
            <div className="NavUserArea">
                <div className="NavSing">Sing Up</div>
                <CartWidget count="0" />
            </div>
        </nav>
    );
};

export default Navbar;