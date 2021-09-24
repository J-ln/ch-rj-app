import React from "react";
import Banner from "../components/Banner/Banner";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
    return (
        <>
            <Banner />
            <ItemListContainer title="New Products" />
        </>
    );
};

export default Home;
