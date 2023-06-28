import React, {useContext, useState} from 'react';
import Search from './search/search';
import Cart from './cart';
import Logo from './logo';
import SideMenu from './sideMenu';
import DropDown from './dropdown/dropdown';
import { Collapse, Container, Navbar } from 'reactstrap';
import styles from "./header.module.css"

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSide, setIsOpenSide] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleSide = () => setIsOpenSide(!isOpenSide);

    function onClick(data) {
        props.onClick(data);
    }

    return (
        <Navbar
            fixed="top"
            expand="md"
            className={styles.headerNav}
        >
            <Container fluid className="p-0 w-100">
                <div className={styles.headerContainer}>
                    <SideMenu isOpen={isOpenSide} toggle={toggleSide} />
                    <Collapse isOpen={isOpen} navbar>
                        <Logo />
                        <DropDown />
                    </Collapse>
                    <Search />
                    <Cart />
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
