import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import css from '../../../style/style.css'


const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://fast-caverns-34943.herokuapp.com/products', data)
            .then(res => {
                console.log(res)
                reset();

            })
    }

    return (
        <div className='add_product'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2>Add a product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} placeholder='Product Name' />
                            <input {...register("district", { required: true })} placeholder='Brand' />
                            <input {...register("shortDes", { required: true })} placeholder='Short description' />
                            <input {...register("longDes", { required: true })} placeholder='Details about product' />
                            <input {...register("img", { required: true })} placeholder='Image URL' />
                            <input {...register("img2", { required: true })} placeholder='2nd image URL' />
                            <input {...register("price", { required: true })} placeholder='Price' />
                            <input type="submit" className='post'/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;
