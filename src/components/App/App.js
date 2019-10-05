import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

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
                    <li  key={movie.id}>{movie.title}</li>
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

export default connect(mapStateToProps) (App);