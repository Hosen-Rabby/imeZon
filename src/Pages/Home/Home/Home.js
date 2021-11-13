import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../Shared/NavBar/NavBar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>
            <Product></Product>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;