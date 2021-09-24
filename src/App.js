import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/category/:id">
                        <ItemListContainer />
                    </Route>
                    <Route path="/category">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
