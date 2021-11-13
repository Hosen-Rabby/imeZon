import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import css from '.././../../style/style.css'
import about from '../../../img/img-1.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <Container>
                <Row>
                    <Col lg={6} className='about_left'>
                        <div className='about_text'>
                            <h6>About Us</h6>
                            <h3>
                                A Unique watch that fits
                                Your Style
                            </h3>
                            <p>
                            The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img src={about} className='about_img img-fluid'></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;