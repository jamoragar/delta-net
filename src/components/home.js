import React from 'react';
import './components.css';

//Components
import HomeJumbotron from './jumbotron';
import Services from './services';
import AboutUs from './aboutus';
import Clients from './clients';
import Footer from './footer';


const Home = () => {
    return (
        <div className="Home">
            <HomeJumbotron />
            <Services />
            <AboutUs />
            <Clients />
            <Footer />
        </div>
    )
}

export default Home;