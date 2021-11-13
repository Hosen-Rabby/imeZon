import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/products', data)
        .then(res =>{
            console.log(res)
            reset();

        })
    }

    return (
        <div>
            <h2>Add a product</h2>
            <Container>
                <Row>
                    <Col lg={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", {required:true})} placeholder='Product Name' />
                            <input {...register("district", {required:true})} placeholder='Brand' />
                            <input {...register("shortDes", {required:true})} placeholder='Short description' />
                            <input {...register("longDes", {required:true})} placeholder='Details about product' />
                            <input {...register("img", {required:true})} placeholder='Image URL' />
                            <input {...register("img2", {required:true})} placeholder='2nd image URL' />
                            <input {...register("price", {required:true})} placeholder='Price' />
                            <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;
