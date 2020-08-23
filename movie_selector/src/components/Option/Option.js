import React from 'react';
import './option-styles.css';
//import { Link } from 'react-router-dom';

function Option() { 
return (
    <section>
        <div className="option-section">
            <div className="option-card">
                <h3 className="option-card__title">Action</h3>
            </div>
            <div className="option-card">
                <h3 className="option-card__title">Horror</h3>
            </div>
        </div>
        <div className="option-section">
            <div className="option-card">
                <h3 className="option-card__title">Romance</h3>
            </div>
            <div className="option-card">
                <h3 className="option-card__title">Comedy</h3>
            </div>
        </div>
        <div className="option-section">
            <div className="option-card">
                <h3 className="option-card__title">Science Fiction</h3>
            </div>
            <div className="option-card">
                <h3 className="option-card__title">Documentary</h3>
            </div>
        </div>
    </section>    
);
}

 
export default Option;

/* <Link to="/"><p>Go Back</p></Link> */
