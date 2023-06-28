import React, {useEffect, useState} from "react";
import {Dropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import {UiChecksGrid} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import DropItem from "./dropItem";
import {GetData} from "../../../services/services";

function DropDown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [categories, setCategories] = useState(["show all"]);

    useEffect(() => {
        const fetchData = new GetData();

        async function fetchCategories() {
            try {
                return await fetchData.fetchCategories();
            } catch (error) {
                console.log(error);
            }
        }

        fetchCategories()
            .then(res => setCategories(["show all", ...res]));
    }, []);


    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={props.direction}>
            <DropdownToggle caret className="d-flex align-items-center">
                <UiChecksGrid size={20} className="me-2"/>
                Catalog
            </DropdownToggle>
            <Link to="/products">
                <DropdownMenu>
                    {categories.map((category) => (
                        <DropItem key={category} category={category}/>
                    ))}
                </DropdownMenu>
            </Link>
        </Dropdown>
    );
}

export default DropDown;
