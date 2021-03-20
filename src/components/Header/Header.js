import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/Urban Riders.png';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../App';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            {/* <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <Button variant="contained" color="secondary">
                                {loggedInUser.name? loggedInUser.name : 'Login'}
                            </Button>
                        </Link>
                    </li>
                    

                </ul>
            </nav> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">Urban Rider</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="">
                            {loggedInUser.name ? loggedInUser.name : ''}
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            {loggedInUser.name ? '....sign out?' : 'Login'}
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;