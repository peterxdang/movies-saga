import {connect} from 'react-redux';
import {Component} from 'react';
import React from 'react';
//import Home from '../Home/Home';
//import { HashRouter as Router, Route } from 'react-router-dom';
//import MovieDetails from '../MovieDetails/MovieDetails';

class Edit extends Component {

    state = {
        title: '',
        description: ''
    }

    inputValueFunction1(event) {
        //console.log(event.target.value);
        console.log(this.state.title);
        this.setState ({
            title: event.target.value
        })
    };
    inputValueFunction2(event) {
        console.log(event.target.value);
    }

    savingChange (event) {
        event.preventDefault();
       
    }


  render() {
    return (
      
        <div className="App">
            <h1>Edit Page</h1>
            <button onClick = {this.savingChange}>Save</button> <button>Cancel</button>
            <br/> <br/>
            <input onChange = {(event) => {this.inputValueFunction1(event)}}placeholder = "title"></input>
            <br/> <br/>
            < textarea onChange = {(event) => {this.inputValueFunction2(event)}}placeholder = "description"></textarea>
            <p>{this.state.title}</p>
        </div>
       
    
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (Edit);