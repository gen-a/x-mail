import {combineReducers} from 'redux';
import mails from './mails.js'
import contacts from './contacts.js'
import layout from './layout.js'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    mails,
    contacts,
    layout,
    form:formReducer
});

export default rootReducer;

