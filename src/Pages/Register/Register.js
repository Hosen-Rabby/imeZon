import React, { useState } from 'react';
import { Container, Form, Row, Spinner, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import NavBar from '../Shared/NavBar/NavBar';
import css from '../../style/style.css'



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading } = useAuth();
    const history = useHistory();

    if (isLoading) { return <Spinner animation="grow" className='spinner' /> }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        if (loginData.password.length == 5) {
            alert('Password cant be less than 6 characters')
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }


    return (
        <>
            <NavBar></NavBar>

            <div className='register'>
                <Container>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6}>
                            <h3>Please Register</h3>
                            <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="name" name='name' onBlur={handleOnBlur} placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" name='email' onBlur={handleOnBlur} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" name='password' onBlur={handleOnBlur} placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" name='password2' onBlur={handleOnBlur} placeholder="Password" />
                                </Form.Group>
                                <button variant="primary" type="submit" className='log'>
                                    Register
                                </button>
                            </Form>
                            <h3>Already have an account?</h3>
                            <NavLink to='/login'>
                                <button className='log'>Login</button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Register;