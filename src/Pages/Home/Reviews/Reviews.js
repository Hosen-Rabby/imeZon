import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const uri = 'http://localhost:5000/reviews'
        fetch(uri)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='reviews_post'>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    {reviews.map(review =>
                        <Col md={6}>
                            {review.name}
                        </Col>    
                    )}
                </Row>
            </Container>       
        </div>
    );
};

export default Reviews;