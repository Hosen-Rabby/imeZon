import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import notFound from '../../img/404.jpg';
import css from '../../style/style.css'

const NotFound = () => {
    return (
        <div className='found'>
            <h4>Page not found!</h4>
            <Container>
                <Row>
                    <Col lg={12}>
                        <img src={notFound} className='img-fluid mb-5'/>
                        <NavLink to='/'>
                            <Button>Back To Home</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;