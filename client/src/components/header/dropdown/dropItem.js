import {DropdownItem} from "reactstrap";
import {useContext} from "react";
import {GlobeContext} from "../../../context";

export default function DropItem({ category}) {
    const {uvp} = useContext(GlobeContext)

    return (
        <DropdownItem onClick={() => {
            uvp(category)
        }}>
            {category.toUpperCase()}
        </DropdownItem>
    );
}