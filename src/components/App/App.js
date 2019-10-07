import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Home from '../Home/Home';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieDetails from '../movieDetails/movieDetails';
import Edit from '../Edit/Edit';

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <header className = "App-header">
            <h1>Welcome to Movies!</h1>
          </header>
          <Route exact path= "/" component={Home} />
          <Route exact path= "/details/:id" component={MovieDetails} />
          <Route exact path= "/edit" component={Edit} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (App);