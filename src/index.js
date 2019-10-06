import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIE', fetchMovies )
    yield takeEvery('FETCH_GENRE', fetchGenre)
}

//function GET promise to server -> router -> database retrieve
//movie data and appear and mount on DOM
function * fetchMovies() {
    try {
        const response = yield axios.get('/movie');
        console.log('THIS IS FROM GET', response.data);        
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('Error while fetching movies', error);
    }    
}

function * fetchGenre(action) {
    try {
        const response = yield axios.get(`/genre/${action.payload}` );
        console.log('GEEEEEEEETTING GENRE', response.data);       
        yield put({ type: 'SET_GENRES', payload: response.data });
    } catch (error) {
        console.log('Error while fetching movies', error);
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

const setReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
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
