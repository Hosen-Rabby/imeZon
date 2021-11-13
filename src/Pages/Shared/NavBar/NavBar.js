import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import css from '../../../style/style.css'

const NavBar = () => {
    const { user, logout } = useAuth();


    return (
        <div className="menu">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="/" className='d-md-none d-lg-block'>IemZon</Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavLink to='/explore'>
                                <button className="top_btn">Explore</button>
                            </NavLink>

                        </Nav>
                        <Nav className="m-auto">
                            <Nav.Link href="/home">Features</Nav.Link>
                            <Navbar.Brand href="/" className = 'menu_logo'>IemZon</Navbar.Brand>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user?.email ?
                                    <>
                                        <button onClick={logout} className="top_btn">Logout</button>
                                        {/* <p>{user.displayName}</p> */}
                                        <NavLink to='/dashboard'>
                                            <button className="top_btn">Dashboard</button>
                                        </NavLink>
                                    </>
                                    :
                                    <NavLink to='/login'>Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;