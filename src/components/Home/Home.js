import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

import {Grid, Paper} from '@material-ui/core'

class Home extends Component {
  // Renders the entire app on the DOM

  
    componentDidMount(){
        this.getMovies();
  }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIE' });
}

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