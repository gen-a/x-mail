import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
//import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
//import {FETCH_MAILS_FULFILLED, FETCH_MAILS_REJECTED, FETCH_MAILS_PENDING} from './actions/mails';

const error = store => next => action=> {
    try{
        next(action);
    }catch(e){
        console.error('Error', action);
    }
};

const store = createStore(
    rootReducer,
    applyMiddleware(promise(), thunk, logger, error)
);

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