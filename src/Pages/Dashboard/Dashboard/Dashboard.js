// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch, useRouteMatch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NavBar from '../../Shared/NavBar/NavBar';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Order from '../Order/CheckOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import '../../../style/style.css';
import CheckOrder from '../Order/CheckOrder';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <div className='dashboard'>
            {/* <NavBar /> */}
            <Container>
                <Row>
                        <Col md={3} className='dashboard_items'>
                            {admin &&
                                <>
                                    <Link to={`${url}/makeAdmin`}>
                                        <button color="inherit">Make Admin</button>
                                    </Link>
                                    <Link to={`${url}/addProduct`}>
                                        <button color="inherit">Add Product</button>
                                    </Link>
                                    <Link to={`${url}/order`}>
                                        <button color="inherit">Order</button>
                                    </Link>
                                    <Link to={`${url}/pay`}>
                                        <button color="inherit">Pay</button>
                                    </Link>
                                </>
                            }
                            <Link to={`${url}/review`}>
                                <button color="inherit">Review</button>
                            </Link>
                        </Col>
                    {/* </div> */}
                    <Col md={9}>
                        <Switch>
                            <Route exact path={path}>
                                {/* <DashboardHome></DashboardHome> */}
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/order`}>
                                <CheckOrder></CheckOrder>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;