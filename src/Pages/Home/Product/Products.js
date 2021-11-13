import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import css from '../../../style/style.css';

const Products = (props) => {
    console.log(props)
    // const item = []
    // const slicedItem = props.slice(5);
    // console.log(slicedItem);
    const { _id, name, img, shortDes, price } = props.product;
    return (
        // <div className='products'>
        <Col lg={4}>
            <div className='product'>
                <div className='product_img'>
                    <img src={img} className='img-fluid' />
                </div>
                <div className="product_info">
                    <h4>{name}</h4>
                    <p>{shortDes}</p>
                    <h4>${price}</h4>
                    <Link to={`/products/${_id}`}>
                        <button className="btn product_btn">Buy Now</button>
                    </Link>
                </div>
            </div>
        </Col>
        // </div>
    );
};

export default Products;