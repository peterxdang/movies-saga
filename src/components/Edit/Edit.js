import {connect} from 'react-redux';
import React, {Component} from 'react';

class Edit extends Component {

//store each movie information
//updated movie information appears while navigating back to details page
    state = {
        title: this.props.reduxState.setReducer.title,
        description: this.props.reduxState.setReducer.description,
        id: this.props.reduxState.setReducer.id
    }

    //changes local state properties without mutation
    inputValueFunction(event, movieProperties) {
        this.setState ({
            ...this.state,
            [movieProperties]: event.target.value
        })
    }

    //save function passes local state "movie" 
    //store one specific movie in Redux setReducer
    //dispatch edited movie object to editReducer for put request
    savingChange (movie) {
        this.props.dispatch({ type: 'EDIT_MOVIE', payload: movie });
        this.props.dispatch({type: 'SET_MOOVIE', payload: movie});
        this.props.history.push(`/details/${this.state.id}`);


    }

    //navigate user back to details page
    cancelButton () {
        console.log('cancel button woorking');
        this.props.history.push(`/details/${this.state.id}`);
    }

    


  render() {
    return (
      
        <div className="App">
            <h1>Edit Page</h1>
            <button onClick = {() => this.savingChange(this.state)} value = "save">Save</button>
            <button onClick = {() => this.cancelButton()} value = "cancel">Cancel</button>
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