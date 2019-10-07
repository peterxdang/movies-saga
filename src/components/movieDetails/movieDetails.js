import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';


class MovieDetails extends Component {

  clickButtonFunction (button) {
    if (button === 'back') {
      this.props.history.push('/');
    }
    else if (button === 'edit') {
      this.props.history.push('/edit');
    }
  }

//Renders movie description and genre
  render() {
    const movieFromList = this.props.reduxState.setReducer;
    const genreFromList = this.props.reduxState.genresReducer;
    return (
      <div className="App">

        <button onClick = {() => {this.clickButtonFunction('back')}}>Back to List</button>
        <button onClick = {() => {this.clickButtonFunction('edit')}} >Edit</button>

        <h1>{movieFromList.title}</h1>

        <br/>
        {movieFromList.description}
        <br/>

        <ul>
          {genreFromList.map((genre) => {
            return (
              <p key={genre.name}>{genre.name}</p>
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

export default connect(mapStateToProps) (MovieDetails);