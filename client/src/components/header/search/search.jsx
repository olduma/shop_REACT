import React, { useEffect, useRef, useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import { GetData } from "../../../services/services";
import { useNavigate } from "react-router-dom";
import styles from "./search.module.css";
import SearchResults from "./searchResults";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchIsShow, setSearchIsShow] = useState(false);

    const fetchData = new GetData();
    const navigate = useNavigate();

    const searchRef = useRef();
    const outRef = useRef();

    async function searchFilter() {
        const res = await fetchData.fetchProducts("show all");
        const filtered = res.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
        setSearchIsShow(true);
    }

    useEffect(() => {
        searchQuery.length > 2 ? searchFilter() : setSearchIsShow(false);

        function handleClickOutside(event) {
            if (outRef.current && !outRef.current.contains(event.target)) {
                setSearchIsShow(false);
            }
        }
        // Bind the event listener
        window.addEventListener("mousedown", handleClickOutside);

        // Unbind the event listener on cleanup
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchQuery]);

    useEffect(() => {
        if (searchIsShow) {
            searchRef.current.focus();
        }
    }, [searchIsShow, filteredProducts]);

    function chooseProduct({ id }) {
        setSearchQuery("");
        setSearchIsShow(false);
        setFilteredProducts([]);
        navigate(`/products/${id}`);
    }

    return (
        <div className={styles.search} ref={outRef}>
            <InputGroup key={filteredProducts.length}>
                <Input
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    innerRef={searchRef}
                />
                <Button color="success" onClick={searchFilter}>
                    Search
                </Button>
            </InputGroup>
            {searchIsShow && (
                <SearchResults filteredProducts={filteredProducts} chooseProduct={chooseProduct} />
            )}
        </div>
    );
}
