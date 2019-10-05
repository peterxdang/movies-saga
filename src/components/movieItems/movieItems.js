import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

class MovieItems extends Component {

  // Renders the entire app on the DOM

  componentDidMount(){
    this.getMovies();
  }

  getMovies() {
    this.props.dispatch({ type: 'FETCH_MOVIE' });
}

  render() {
    return (
      <div className="App">
        <p>Movie Goes in here</p>
        <ul>
            {this.props.reduxState.moviesReducer.map((movie) => {
                return (
                    <div  key={movie.id}><img src = {movie.poster} alt = "movie poster details"/>{movie.title}{movie.description}</div>
                );
            })}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (MovieItems);