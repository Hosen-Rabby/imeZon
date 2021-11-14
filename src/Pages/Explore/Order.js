import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

import css from '../../style/style.css'




const Order = ({ handleClose, show, booking }) => {

    const{user} = useAuth();

    const { name, price } = booking;
    const { register, handleSubmit, reset } = useForm();

    const handleOrderSubmit =  data => {
        console.log(data);
        alert('Successfully placed order')
        handleClose();

        // e.preventDefault();
        axios.post('https://fast-caverns-34943.herokuapp.com/orders', data)
            .then(res => {
                console.log(res)
                reset();
            })
    }

    return (
        <div className='order_modal'>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleOrderSubmit)}>
                        <input {...register("proname", { required: true })} placeholder={name} />
                        <input {...register("name", { required: true })} placeholder='Your Name' />
                        <input {...register("email", { required: true , disabled: false})} placeholder={user.email} />
                        <input {...register("address", { required: true })} placeholder='Address' />
                        <input {...register("phone", { required: true })} placeholder='Phone' />
                        <input {...register("price", { required: true, disabled: false })} placeholder={`Price $${price}`} />
                        
                        <input type="submit" className='post'/>

                    </form>
                </Modal.Body>
               
            </Modal>


        </div >
    );
};

export default Order;