import React from 'react';
import './Reviews.css';
import { Card,Button,Badge } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {

    const { comment,rating } = props.review;
    const history = useHistory();

    return (
        <div className="col gy-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text>
                  Rating: <Badge bg="success">{rating}</Badge>
                </Card.Text>
                <Card.Text>
                  {comment}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
    );
};

export default Service;