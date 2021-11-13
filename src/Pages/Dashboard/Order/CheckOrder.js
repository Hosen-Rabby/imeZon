import React,{useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const CheckOrder = () => {

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
        <div>
            <Container>
                <Row>
                    <h4>You have ordered {count} items</h4>
                </Row>
                <Row>
                    {
                        orders.map(order =>
                            <Col lg={8}>
                                <div>
                                   {order.price}
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CheckOrder;