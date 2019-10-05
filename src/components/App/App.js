import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Home from '../Home/Home';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieDetails from '../movieDetails/movieDetails';

class App extends Component {

  // Renders the entire app on the DOM

  render() {
    return (
      <Router>
        <div className="App">
    
          <Route exact path= "/" component={Home} />
          <Route exact path= "/details" component={MovieDetails} />
        </div>
       
      </Router>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (App);