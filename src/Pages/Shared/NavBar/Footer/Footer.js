import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import css from '../../../../style/style.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={3}>
                        <h4>Help</h4>
                        <div>
                            <p>Search</p>
                            <p>Advance Search</p>
                            <p>Information</p>
                            <p>Shipping Details</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4>Information</h4>
                        <div>
                            <p>Store Locator</p>
                            <p>Delivery Partner</p>
                            <p>Rewards</p>
                            <p>Partners</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4>Support</h4>
                        <div>
                            <p>Contact</p>
                            <p>Library</p>
                            <p>Careers</p>
                            <p>History</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4>Subscribe</h4>
                        <span>
                        Be the first to hear about new arrivals, by invitation only sales and special events
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;