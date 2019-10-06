import {connect} from 'react-redux';
import {Component} from 'react';
import React from 'react';
//import Home from '../Home/Home';
//import { HashRouter as Router, Route } from 'react-router-dom';
//import MovieDetails from '../MovieDetails/MovieDetails';

class Edit extends Component {

  render() {
    return (
      
        <div className="App">
            <h1>Edit Page</h1>
            <button>Save</button> <button>Cancel</button>
            <br/> <br/>
            <input placeholder = "title"></input>
            <br/> <br/>
            < textarea placeholder = "description"></textarea>
         
        </div>
       
    
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (Edit);