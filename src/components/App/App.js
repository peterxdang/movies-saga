import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import MovieItems from '../movieItems/movieItems';

class App extends Component {

  // Renders the entire app on the DOM

  render() {
    return (
      <div className="App">
        <p>Movie Goes in here</p>
        <MovieItems />
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (App);