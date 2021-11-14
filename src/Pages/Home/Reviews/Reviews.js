import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import css from '../../../style/style.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const uri = 'https://fast-caverns-34943.herokuapp.com/reviews'
        fetch(uri)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div id='clients' className='reviews_post'>
            <Container>
                <Row>
                    <div className='clients'>
                        <Col lg={12}>
                            <h3>Satisfied Clients</h3>
                        </Col>
                    </div>
                </Row>
                <Row>
                    {reviews.map(review =>
                        <>


                                <Col md={6}>
                            <div className='client_reviews'>

                                    <h3>{review.name}</h3>
                                    <p>{review.review}</p>
                            </div>

                                </Col>



                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;