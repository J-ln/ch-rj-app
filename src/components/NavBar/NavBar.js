import React from "react";
import "./NavBar.scss";
import logo from "./Logo.svg";
import NavButton from "./NavElements/NavButton";
import CartWidget from "./NavElements/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="NavBar">
            <NavLink to={"/"}>
                <img className="Logo" src={logo} alt="" />
            </NavLink>
            <ul className="NavButtonList">
                <NavLink to={"/"}>
                    <NavButton text="Home" />
                </NavLink>

                <NavButton text="Products" drop="true"></NavButton>

                <NavButton text="Contact" />
            </ul>

            <div className="NavUserArea">
                <div className="NavSing">Sing Up</div>
                <NavLink to={"/cart"}><CartWidget count="0" /></NavLink>

            </div>
        </nav>
    );
};

export default Navbar;
