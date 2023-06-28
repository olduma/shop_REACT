import React from 'react';
import styles from './searchResults.module.css';

const SearchResults = ({ chooseProduct, filteredProducts }) => {
    return (
        <div className={styles.searchResults}>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className={styles.searchResultsItem}
                        onClick={() => chooseProduct(product)}
                    >
                        <img
                            src={product.image}
                            className={styles.searchResultsImage}
                        />
                        <p className={styles.searchResultsTitle}>{product.title}</p>
                    </div>
                ))
            ) : (
                <p className={styles.searchResultsNotFound}>
                    Sorry, we don't have it...
                </p>
            )}

        </div>
    );
};

export default SearchResults;
