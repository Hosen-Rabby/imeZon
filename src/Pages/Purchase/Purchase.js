import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


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

    return (
        <div>
            {name}
        </div>
    );
};

export default Purchase;