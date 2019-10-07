import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

import {Grid, Paper} from '@material-ui/core'

class Home extends Component {


  //render the list of movies
    componentDidMount(){
        this.getMovies();
  }

  //sending dispatch to fetch movie generator function
    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIE' });
}

//click function linked to movie image
//passes movie as a param store in setReducer and fetch genre
//send user to details page
    clickImage = (movie) => {
        console.log('click button works on Image', movie);
        this.props.dispatch({type: 'SET_MOOVIE', payload: movie});
        this.props.dispatch({type: 'FETCH_GENRE', payload: movie.id });
        this.props.history.push(`/details/${movie.id}`);
    }


    render() {
    return (
      <div className="App">
        <Grid container direction="row"justify="center" alignItems="center">
            {this.props.reduxState.moviesReducer.map((movie) => {
                return (
                  <img onClick = {() => this.clickImage(movie)} src = {movie.poster} alt = "movie poster details"/>
                );
            })}
        </Grid>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (Home);