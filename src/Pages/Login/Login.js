import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

import { NavLink } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }


    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <Row>
                    <h3>Please Login</h3>
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' onBlur={handleOnBlur} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' onBlur={handleOnBlur} placeholder="Password" />
                        </Form.Group>
                        <button variant="primary" type="submit">
                            Login
                        </button>
                    </Form>
                </Row>

                <Row>
                    <h4>Didn't registered yet!</h4>
                    <NavLink to='/register'>Register</NavLink>
                </Row>
            </Container>
        </div>
    );
};

export default Login;