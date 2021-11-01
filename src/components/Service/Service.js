import React from 'react';
import './Service.css';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { _id ,name, img, price,description } = props.service;
    const history = useHistory();

    // const handleProceedToDetails = () => {
    //     history.push('/details');
    // }

    return (
        <div className="col gy-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img className="img-size" variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>Price: {price}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Link to={'details/' + _id}>
                    <button className="btn-regular">Book Now</button>
                </Link>
              </Card.Body>
            </Card>
        </div>
    );
};

export default Service;