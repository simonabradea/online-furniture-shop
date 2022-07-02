import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CustomCard = (props) => {
    return (
        <Card style={{ width: '18rem' }} className={props.className}>
            {props.imgSrc && <Card.Img variant="top" src={props.imgSrc} />}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.children}</Card.Text>
                {props.showButton && <Button variant="dark" onClick={props.buttononClick}>{props.buttonLabel}</Button>}
            </Card.Body>
        </Card>
    )
}

export default CustomCard;