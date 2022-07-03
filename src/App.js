import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./components/Cart/CartContainer";

const App = () => {
    return (
        <div className="App">
            <CartContextProvider>
                <BrowserRouter>

                    <Navbar />
                    <Switch>
                        <Route path="/category/:id">
                            <ItemListContainer />
                        </Route>
                        {/* <Route path="/category">
                        <ItemListContainer />
                    </Route> */}
                        <Route path="/item/:id">
                            <ItemDetailContainer />
                        </Route>
                        <Route path="/cart">
                            <CartContainer />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />

                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
};

export default App;
