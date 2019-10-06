import {connect} from 'react-redux';
import {Component} from 'react';
import React from 'react';

class Edit extends Component {

    state = {
        title: '',
        description: '',
        id: this.props.reduxState.setReducer.id
    }

    inputValueFunction(event, movieProperties) {
        //console.log(event.target.value);
        //console.log(this.state.title);
        this.setState ({
            ...this.state,
            [movieProperties]: event.target.value
        })
    }

    savingChange (movie) {
        this.props.dispatch({ type: 'EDIT_MOVIE', payload: movie });
    }


  render() {
    return (
      
        <div className="App">
            <h1>Edit Page</h1>
            <button onClick = {() => this.savingChange(this.state)}>Save</button><button>Cancel</button>
            <br/> <br/>
            <input onChange = {(event) => {this.inputValueFunction(event, 'title')}}placeholder = "title"></input>
            <br/> <br/>
            < textarea onChange = {(event) => {this.inputValueFunction(event, 'description')}}placeholder = "description"></textarea>
        </div>
       
    
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (Edit);