import React from 'react';
import './Order.css';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Order = (props) => {

    const { _id ,offerName,userName,email,offerImg,offerPrice } = props.order;
    const history = useHistory();

    // const handleProceedToDetails = () => {
    //     history.push('/details');
    // }

    return (
        <div className="col gy-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img className="img-size" variant="top" src={offerImg} />
              <Card.Body>
                <Card.Title>{offerName}</Card.Title>
                <Card.Title>Price: {offerPrice}</Card.Title>
                <Card.Text>
                  User Name: {userName}
                </Card.Text>
                <Card.Text>
                  User Email: {email}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
    );
};

export default Order;