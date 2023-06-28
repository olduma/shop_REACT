import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {GetData} from "../../../../services/services";
import {Image} from "react-bootstrap";
import Loading from "../../../spinner/loading";
import styles from "./productPage.module.css"
import Tabs from "./tabs";
import {Alert, Col, Container, Row} from "reactstrap";
import Delivery from "./delivery";
import {CheckCircle} from "react-bootstrap-icons";
import ModalWindow from "../../../modal/modal";

function ProductPage() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function toggleModal (){
        setModalIsOpen(!modalIsOpen)
    }


    const fetchData = new GetData()
    const params = useParams()
    const [product, setProduct] = useState(null);



    useEffect(() => {
        fetchData.fetchProductById(params.id)
            .then(data => setProduct(data))
            .catch(error => console.log(error))
    }, [params.id]);

    if (!product) {
        return <Loading/>
    }


    return (
        <Container className="p-1 w-100">
            <Row>
                <Col>
                    <h3 className="p-3 m-2">{product.title}</h3>
                </Col>
            </Row>
            <Row>
                <Col md="3" className="d-flex align-items-center">
                    <div className="" >
                        <Image
                            onClick={toggleModal}
                            src={product.image} fluid
                            className={styles.mainPhoto}
                        />
                    </div>
                </Col>
                <Col md="6" className="d-flex flex-column align-items-start justify-content-end mt-5">
                    <Row className="mb-2 d-block">
                        <Col className="d-flex align-baseline mt-2">
                            <Alert className="p-2">
                                <CheckCircle size={15} className="me-1"/>
                                In stock
                            </Alert>
                            <p className="text-muted mb-0 p-2">Code: {product.id}</p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h4 className={`${styles.price} mb-2 al p-3`}>${product.price}</h4>
                            <button className="btn btn-success btn-lg">Add to cart</button>
                        </Col>
                    </Row>
                    <hr className="d-block d-md-none"/>
                    <Row>

                        <Col>
                            <hr/>
                            <p className="mt-3">{product.description}</p>
                            <hr/>
                        </Col>
                    </Row>
                </Col>
                <Col md="3" className="d-none d-lg-block p-3">
                    <Delivery/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="col-md-12 p-2 mt-5">
                        <Tabs description={product.description}/>
                    </div>
                </Col>
            </Row>
            <div>
                <ModalWindow product={product} modalIsOpen={modalIsOpen} toggleModal={toggleModal}/>
            </div>
        </Container>
    );
}

export default ProductPage;
