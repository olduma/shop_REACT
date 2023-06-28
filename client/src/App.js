import Header from "./components/header/header";
import React, {useState} from "react";
import Footer from "./components/footer/footer";
import styles from "./App.module.css";
import {BrowserRouter} from "react-router-dom";
import {GlobeContext} from "./context";
import AppRouter from "./components/appRouter";

function App() {
    const [visibleProducts, setVisibleProducts] = useState("show all");

    function updateVisibleProducts(value) {
        setVisibleProducts((prevState) => value);
    }

    return (
        <GlobeContext.Provider value={{vp: visibleProducts, uvp: updateVisibleProducts}}>
            <BrowserRouter>
                <Header full/>
                <div className={styles.content}>
                    <AppRouter/>
                </div>
                <Footer/>
            </BrowserRouter>
        </GlobeContext.Provider>
    );
}

export default App;
