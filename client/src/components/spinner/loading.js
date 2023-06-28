import React from "react";
import styles from "./loading.module.css"
import {Spinner} from "reactstrap";

export default function Loading() {
    return (
        <div className={styles.loadingOverlay}>
            <Spinner
                className="m-auto"
                color="primary"
            >
                Loading...
            </Spinner>
        </div>
    )
}
