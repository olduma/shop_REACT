import React from 'react';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import { List } from 'react-bootstrap-icons';

export default function SideMenu(props) {
    const { isOpen, toggle } = props;

    return (
        <div>
            <Button color="dark" onClick={toggle}>
                <List size={30} />
            </Button>
            <Offcanvas isOpen={isOpen} toggle={toggle}>
                <OffcanvasHeader toggle={toggle}>Off canvas</OffcanvasHeader>
                <OffcanvasBody>
                    <strong>This is the Off canvas body.</strong>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}
