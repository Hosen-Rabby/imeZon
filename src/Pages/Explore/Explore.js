import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import { useParams } from "react-router-dom";


const Explore = () => {
    // const { id } = useParams();
    // const [singles, setSingles] = useState({});

    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        const uri = 'http://localhost:5000/products'
        fetch(uri)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // useEffect(() => {
    //     const uri = `http://localhost:5000/products/${id}`
    //     fetch(uri)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])


    return (
        <>
            <NavBar></NavBar>
            <Container>
                <Row>
                    {
                        products.map(product =>
                            <Col lg={4} md={6} key={product._id}>
                                <div className='product_item'>
                                    <div className='product_img'>
                                        <img src={product.img} className='img-fluid'></img>
                                    </div>
                                    <h2>{product.name}</h2>
                                    <p>{product.shortDes}</p>
                                    <h6>{product.price} Tk.  <span>Per person</span></h6>
                                    <Link to={`/products/${product._id}`}>
                                        <button className="btn product_btn">Buy Now</button>
                                    </Link>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default Explore;