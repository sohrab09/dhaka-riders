import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './Ride.css'
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Ride = (props) => {
    const {id, name, image } = props.ride;
    
    const history = useHistory();
    const handleButton =(rideName)=> {
        console.log("Ride Name:", rideName)
        history.push(`/destination/${rideName}`)

    }

    return (

        <Card as={Link} to="/destination" className="cardStyle shadow-sm p-2 bg-body rounded container " style={{ width: '14rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="text-danger">{name}</Card.Title>
                <Button onClick={() => handleButton(name)} as={Link} to="/destination" variant="success">Book Now <FontAwesomeIcon icon={faCheckCircle}/></Button>
            </Card.Body>
        </Card>

    );
};

export default Ride
    ;