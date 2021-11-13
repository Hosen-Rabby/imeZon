import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Products from './Products';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const uri = 'http://localhost:5000/products'
        fetch(uri)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container>
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