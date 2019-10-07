import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';

// Import saga middleware
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIE', fetchMovies )
    yield takeEvery('FETCH_GENRE', fetchGenre)
    yield takeEvery('EDIT_MOVIE', editMovie)
}

//movie data and appear and mount on DOM
//GET request, to server/router.movie.js to obtain all movie data
function * fetchMovies() {
    try {
        const response = yield axios.get('/movie');
        console.log('THIS IS FROM GET', response.data);        
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('Error while fetching movies', error);
    }    
}

//generator function, GET request
//retrieves genre data for each movie and appear on movieDetails page
function * fetchGenre(action) {
    try {
        const response = yield axios.get(`/genre/${action.payload}` );
        console.log('GEEEEEEEETTING GENRE', response.data);       
        yield put({ type: 'SET_GENRES', payload: response.data });
    } catch (error) {
        console.log('Error while fetching movies', error);
    }    
}

//generator function for editing/updating movie's title/description
function * editMovie (action) {
    try {
        yield axios.put(`/movie`, action.payload);
    } catch (error) {
        console.log('Error while editing movie properties', error);
    }    
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//storing clicked movie information in setReducer
const setReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOOVIE':
            return action.payload;
        default:
            return state;
    }
}

//store the movie genres in this reducer
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        setReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
