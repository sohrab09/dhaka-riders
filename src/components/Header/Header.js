import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    return (
        <div className="container">
            <Navbar bg="info" expand="lg">
                <Navbar.Brand as={Link} to="/">Dhaka Riders</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                        
                    </Nav>
                    <Button variant="success" as={Link} to="/signin">{loggedInUser.userName || loggedInUser.displayName ? loggedInUser.userName || loggedInUser.displayName : "Login"}</Button>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;