import React, { Component } from 'react';
import axios from 'axios';
import MovieResult from './MovieResult/MovieResult';

const url = 'https://api.themoviedb.org/3/discover/movie?api_key=7beffa18096602d1eb82e96512a5857c&with_genres='
// const id = null;

class Movies extends Component {
  state = {
    movies: [], 
  };

  componentDidMount() {
    axios
      .get(`${url}28`)
      .then(res => {
        this.setState({ 
          movies: res.data.results, 
        //   data: true
        });
        console.log('Current State: ', this.state.movies);
      })
  }

  // componentDidUpdate() {
  //   if(this.props.match.params.movieId === 28 || 12 || )
  //   {
  //     const id = this.props.match.params.movieId;

  //   }

  // }


    render () { 
        // if (!this.state.movies) {
        //     return null
        //   }
        // const filterMovies = this.state.movies.filter(movie => movie.id !== this.state.mainVideo.id)
        return (
            <>
            <h1>Movie List</h1>
            {this.state.movies.map(movie => {
                console.log(movie);
                const { title, poster_path, overview, id } = movie;
                return (
                    <MovieResult
                        key={id}
                        id={id}
                        title={title}
                        poster_path={poster_path}
                        overview={overview} />
                    )
                })}
            </>
        )
    }
}

export default Movies;