import logo from "./logo.svg";
import React from "react";
import Navbar from "./components/NavBar";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
