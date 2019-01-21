import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
//import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import {error} from './middlewares/error';
//import {FETCH_MAILS_FULFILLED, FETCH_MAILS_REJECTED, FETCH_MAILS_PENDING} from './actions/mails';

const middleware = [promise(), thunk, error, logger];
/*
const store = createStore(
    rootReducer,
    applyMiddleware(promise(), thunk, error, logger)
);
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
    applyMiddleware(...middleware)
));


/*
store.dispatch((dispatch)=>{
    dispatch({type:FETCH_MAILS_PENDING});
    axios.get("http://localhost:3000/assets/mails.json")
        .then(response => {
            dispatch({type:FETCH_MAILS_FULFILLED, payload:response});
        })
        .catch(err=>{
            dispatch({type:FETCH_MAILS_REJECTED, payload:err});
        });
});


store.dispatch({
    type:'FETCH_MAILS',
    payload:axios.get("http://localhost:3000/assets/mails.json")
});
*/


export default store;