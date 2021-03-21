import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css'
import Map from '../Map/Map'

const Destination = () => {
    return (
        <div className="container">
            <div className="main-content">
                <div className="text">
                    <Form>
                        <Form.Group controlId="formBasicStart">
                            <Form.Label>Pick Form</Form.Label>
                            <Form.Control type="text" name="startForm" placeholder="Mirpur" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEnd">
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control type="text" name="journeyEnd" placeholder="Gulshan" />
                        </Form.Group>
                    </Form>
                    <Button className="mb-3" as={Link} to="/finalDestination" variant="primary"> Search</Button>
                </div>
                <br/>
                <div>
                    <Map></Map>
                </div>

            </div>
        </div>
    );
};

export default Destination;