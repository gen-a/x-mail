import {combineReducers} from 'redux';
import mails from './mails.js'
import contacts from './contacts.js'
import layout from './layout.js'

const rootReducer = combineReducers({
    mails,
    contacts,
    layout
});

export default rootReducer;

