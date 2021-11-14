import React,{useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import css from '../../../style/style.css'


const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    console.log(orders);
    const count = orders.length;
    useEffect(() => {
        const uri = 'https://fast-caverns-34943.herokuapp.com/orders'
        fetch(uri)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className='check_order'>
            <Container>
                <Row>
                    <h4>There are {count} orders</h4>
                </Row>
                <Row>
                    {
                        orders.map(order =>
                            <Col lg={8}>
                                <div className='order_items'>
                                    <h5>{order.proname}</h5>
                                   <p>Price: {order.price}</p>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageOrders;