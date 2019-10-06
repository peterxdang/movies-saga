import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

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
        
        this.props.history.push('/details');
    }


    render() {
    return (
      <div className="App">
        <ul>
            {this.props.reduxState.moviesReducer.map((movie) => {
                return (
                    <div  key={movie.id}><img onClick = {() => this.clickImage(movie)} src = {movie.poster} alt = "movie poster details"/>{movie.title}{movie.description}</div>
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

export default connect(mapStateToProps) (Home);