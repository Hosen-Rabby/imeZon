import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import css from '../../../style/style.css'


const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://fast-caverns-34943.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res)
                reset();

            })
    }

    return (
        <div className='reviews'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2>Post review</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} placeholder='Name' />
                            <input {...register("review", { required: true })} placeholder='Post review' />
                            <input {...register("star", { required: true })} placeholder='Give rating in 5' />
                            <input type="submit" className='post'/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;
