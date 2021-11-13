import React from 'react';
import { Col } from 'react-bootstrap';

const Products = (props) => {
    console.log(props)
    // const item = []
    // const slicedItem = props.slice(5);
    // console.log(slicedItem);
    const { name, img } = props.product;
    return (
        // <div className='products'>
            <Col lg={4}>
                <div className='product'>
                    <div className='product-img'>
                        <img src={img} className='img-fluid' />
                    </div>
                    <div >
                    </div>
                </div>
            </Col>
        // </div>
    );
};

export default Products;