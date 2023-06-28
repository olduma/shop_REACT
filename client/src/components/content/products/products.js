import ProductCard from "./productCard";
import React, {useContext, useEffect, useState} from "react";
import {GetData} from "../../../services/services";
import LoadingError from "../../error/error";
import Loading from "../../spinner/loading";
import {GlobeContext} from "../../../context";

export default function Products() {
    const {vp} = useContext(GlobeContext)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = new GetData()

    useEffect(() => {
        setError(false);
        setLoading(true);

        fetchData.fetchProducts(vp)
            .then((response) => setProducts(response))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [vp]);

    if (error) {
        return <LoadingError />;
    }

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="products m-5 d-flex flex-wrap justify-content-around">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id}>
                            {product.name}
                        </ProductCard>
                    ))}
                </div>
            )}
        </div>
    );
}
