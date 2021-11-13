import React, { useState } from 'react';
import { Container, Form, Row, Col} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import css from '../../style/style.css'

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
        <>
            <NavBar></NavBar>

            <div className='login'>
                <Container>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6}>
                            <h3>Please Login</h3>
                            <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" name='email' onBlur={handleOnBlur} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" name='password' onBlur={handleOnBlur} placeholder="Password" />
                                </Form.Group>
                                <button variant="primary" type="submit" className='log'>
                                    Login
                                </button>
                            </Form>
                            <h3>Didn't registered yet!</h3>
                            <NavLink to='/register'>
                                <button className='log'>Register</button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default Login;