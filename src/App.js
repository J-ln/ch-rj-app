import React from "react";
import "./App.scss";
import Navbar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
    return (
        <>
            <div className="App">
                <Navbar />
                <Banner />
                <ItemListContainer title="New Products" />
            </div>
        </>
    );
};

export default App;
