import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';

import Order from '../Explore/Order';
import NavBar from '../Shared/NavBar/NavBar';
import css from '../../style/style.css'

const Purchase = () => {


    const { id } = useParams();

    const [booking, setBooking] = useState({});
    const { name, img, img2, district, longDes } = booking;
    console.log(name)

    useEffect(() => {
        fetch(`https://fast-caverns-34943.herokuapp.com/products/${id}`)

            .then(res => res.json())
            .then(data => setBooking(data));

    }, [])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <NavBar></NavBar>
            <div className='purchase'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3>{name}</h3>

                            <Button variant="primary" onClick={handleShow} className='post'>
                                Place Order
                            </Button>
                            <Order
                                booking={booking}
                                handleClose={handleClose}
                                show={show}
                            ></Order>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <img src={img} className='img-fluid' />
                        </Col>
                        <Col lg={8}>
                            <div className='long'>
                                <h6>{longDes}</h6>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Purchase;