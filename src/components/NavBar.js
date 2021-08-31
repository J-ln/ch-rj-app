import React from "react";
import "./NavBar.scss";

const Navbar = () => {
    return (
        <nav className="NavBar">
            <div className="NavButtonList">
                <div className="NavButton">Home</div>
                <div className="NavButton">Products</div>
                <div className="NavButton">Contact</div>
            </div>
            <div className="Logo">
                J-ln <span>Store</span>
            </div>
            <div className="NavUserArea">
                <div className="NavSing">Sing Up</div>
                <div className="NavProfile"></div>
            </div>
        </nav>
    );
};

export default Navbar;
