import React, { Component } from 'react';
import axios from 'axios';
import './result-page-styles.scss'
import '../MovieResult/movie-result-styles.css';


const src = 'https://image.tmdb.org/t/p/w500/'
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=7beffa18096602d1eb82e96512a5857c&with_genres='

// let id = null

class ResultPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    console.log(this.props.match.params);
    if (this.props.match.params.genreID) { 
    axios
      .get(`${url}${this.props.match.params.genreID}`)
      .then(res => {
        this.setState({ 
          movies: res.data.results, 
        });
      })
    }
  }

  render() {

    console.log(this.state.movies);
    const First = Math.floor(Math.random()*21);
    // const second = Math.floor(Math.random()*21);
    // const third = Math.floor(Math.random()*21);

    if (!this.state.movies.length > 0) {
      return null
    }

    return (
      <div className="result-page">
        <h1 className="result-page__title">You're Watching</h1>
        <div className="movie">
          <img className="movie__image" src={src+this.state.movies[First].poster_path}></img>
          <p className="movie__title">{this.state.movies[First].title}</p>
          <p className="movie__overview">{this.state.movies[First].overview}</p>
          </div>
      </div>
    );
  }
}

export default ResultPage;
