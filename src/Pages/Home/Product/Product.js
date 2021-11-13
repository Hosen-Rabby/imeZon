import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Products from './Products';
import css from '../../../style/style.css'

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const uri = 'https://fast-caverns-34943.herokuapp.com/products'
        fetch(uri)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container id='watches'>
            <Row>
                <Col lg={12}>
                    <h3>Discover Our Collections</h3>
                </Col>
            </Row>
            <Row>
                {
                    products.slice(0,6).map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </Row>
        </Container>
    );
};

export default Product;