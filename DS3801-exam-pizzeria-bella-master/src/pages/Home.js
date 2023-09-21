import React from 'react';


import Navbar from '../components/navbar/Navbar';
import HeroImg from '../components/HeroImg';
import OrderOnline from '../components/OrderOnline';
import OpeningHours from '../components/hero/OpeningHours';
import Footer from '../components/footer/Footer';
import '../style.css';


function Home( props) {
    return(
       <div className='container'>
            <Navbar />
            <HeroImg img={ props.img } />
            <OrderOnline/>
            <OpeningHours />
            <Footer />
        </div>      
    );
}

export default Home;