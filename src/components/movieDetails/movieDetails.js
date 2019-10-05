import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';


class MovieDetails extends Component {

  


//This page render movie description and genre based on its ID
  render() {
    const movieFromList = this.props.reduxState.setReducer;
    return (
      <div className="App">
        <h1>{movieFromList.title}</h1>
        <br/>
        {movieFromList.description}
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (MovieDetails);