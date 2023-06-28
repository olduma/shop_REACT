import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./content/home/home";
import Products from "./content/products/products";
import About from "./content/about/about";
import ProductPage from "./content/products/productPage/productPage";

const AppRouter = () => {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/products/:id" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/*" element={<Navigate to="/" replace />} />*/}
        </Routes>
    )
};

export default AppRouter;
