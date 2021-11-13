import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Order from '../Explore/Order';


const Purchase = () => {
    

    const { id } = useParams();
    
    const [booking, setBooking] = useState({});
    const { name, img, img2, district, longDes } = booking;
    console.log(name)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)

            .then(res => res.json())
            .then(data => setBooking(data));

    }, [])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {name}
            
            <Button variant="primary" onClick={handleShow}>
                Place Order
            </Button>
            <Order
            booking = {booking}
            handleClose={handleClose}
            show={show}
            ></Order>
        </div>
    );
};

export default Purchase;