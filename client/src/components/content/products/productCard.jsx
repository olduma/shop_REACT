import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import styles from "./productCard.module.css";
import {CartPlus} from "react-bootstrap-icons";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

export default function ProductCard({product}) {

    const navigate = useNavigate();

    const {title, image, price, description, rating, id} = product;
    const [toggleDescription, setToggleDescription] = useState(false);

    const handleDescription = () => {
        setToggleDescription(!toggleDescription)
    }

    return (
        <Card className={styles.productCard} onClick={() => navigate(`${id}`)}>
            <div className={styles.imageWrapper}>
                <img className={styles.productImage} alt={title} src={image} onClick={() => console.log(title)} />
            </div>
            <CardBody>
                <CardTitle tag="h5" className="m-">
                    {title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
                    {`${price} USD`}
                </CardSubtitle>

                {toggleDescription && <CardText className={styles.productDescription}>{description}</CardText>}

                <div className="d-flex justify-content-center">
                    <Button onClick={handleDescription} color="danger" outline>
                        {toggleDescription ? 'Hide' : "Show info"}
                    </Button>
                    <Button className={styles.productButton} color="success" outline>
                        <CartPlus size={20}/>
                    </Button>
                </div>

            </CardBody>
        </Card>
    );
}
