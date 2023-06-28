import React from "react";
import {NavbarBrand} from "reactstrap";
import styles from "./logo.module.css"
import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <NavbarBrand>
            <Link to="/" className={styles.logoBrand}>
                <img
                    alt="logo"
                    src={`${process.env.PUBLIC_URL}/logo512.png`}
                    className={styles.logoImg}
                />
                REACT
            </Link>
        </NavbarBrand>
    )
}

