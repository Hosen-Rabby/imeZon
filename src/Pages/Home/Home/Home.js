import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Product></Product>
        </div>
    );
};

export default Home;