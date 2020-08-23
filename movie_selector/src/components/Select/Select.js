import React from 'react';
import './select-styles.css';
import '../Option/option-styles.css'
import { Link } from 'react-router-dom';


class Select extends React.Component {

    render()
    {
        return (
            <section className="select-page">
                <h1 className="select-page__title">Choose A Genre</h1>
                
                <div className="option-section">
                <Link className="option-card" to="/result/28">
                        <h3 key="28" className="option-card__title">Action</h3>
                    </Link>
                    <Link className="option-card" to="/result/27">
                        <h3 key="27" className="option-card__title">Horror</h3>
                    </Link>
                </div>
                <div className="option-section">
                <Link className="option-card" to="/result/10749">
                        <h3 key="10749" className="option-card__title">Romance</h3>
                    </Link>
                    <Link className="option-card" to="/result/35">
                        <h3 key="35" className="option-card__title">Comedy</h3>
                    </Link>
                </div>
                <div className="option-section">
                <Link className="option-card" to="/result/878">
                        <h3 key="878" className="option-card__title">Science Fiction</h3>
                    </Link>
                    <Link className="option-card" to="/result/99">
                        <h3 key="99" className="option-card__title">Documentary</h3>
                    </Link>
                </div>
                
            </section>  
        );
    }
}

 
export default Select;