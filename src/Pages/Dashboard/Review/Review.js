import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
        .then(res =>{
            console.log(res)
            reset();

        })
    }

    return (
        <div>
            <h2>Post review</h2>
            <Container>
                <Row>
                    <Col lg={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", {required:true})} placeholder='Name' />
                            <input {...register("review", {required:true})} placeholder='Post review' />
                            <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;
