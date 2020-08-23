import React from 'react';
import './home-styles.css';
import { Link } from 'react-router-dom';

function Home() { 
return (
    <section className="main-page">
       <h1 className="main-page__title">What Should I Watch Tonight?</h1>
        <Link to="/select"><p className="main-page__btn">Get Started</p></Link>
    </section>
);
}

 
export default Home;