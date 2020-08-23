import React from 'react';
import './movie-result-styles.css';

const url = 'https://image.tmdb.org/t/p/w500/'

const MovieResult = (props) => {
    // if (!props.movie) { 
    //     return null
    // }

    const { id, title, poster_path, overview} = props;
    return (  
            <div className="movie" id={`${id}`}>
                <img className="movie__image" src={`${url}${poster_path}`} alt="movie poster"></img>
                <p className="movie__title">{title}</p>
                <p className="movie__overview">{overview}</p>
            </div>  
    )
}

export default MovieResult;