import {FETCH_CONTACTS_FULFILLED, FETCH_CONTACTS_REJECTED, FETCH_CONTACTS_PENDING, DEL_CONTACT, UPD_CONTACT_ATTRIBUTE, ADD_CONTACT} from '../actions/contacts';

const initialState = {
    fetching:false,
    error:'',
    contactList: []
};

function contacts(state = initialState, action) {
    let updList;

    switch (action.type) {
        case FETCH_CONTACTS_PENDING:
            return {
                ...state,
                fetching:true
            };
        case FETCH_CONTACTS_FULFILLED:
            return {
                ...state,
                fetching:true,
                contactList:action.payload.data
            };
        case FETCH_CONTACTS_REJECTED:
            return {
                ...state,
                fetching:true,
                error:action.payload
            };

        case ADD_CONTACT:
            updList = state.contactList.slice();
            updList.push(action.payload);
            return {
                ...state,
                contactList: updList
            };

        case DEL_CONTACT:
            updList = state.contactList.slice();
            updList = updList.filter(
                (object) => object.id !== action.payload.id
            );
            return {
                ...state,
                contactList: updList
            };

        case UPD_CONTACT_ATTRIBUTE:
            updList = state.contactList.slice();
            updList = updList.map(
                (object) => {
                    let newItem = {...object};
                    if (newItem.id === action.payload.id) {
                        newItem[action.payload.name] = action.payload.value;
                    }
                    return newItem;
                }
            );
            return {
                ...state,
                contactList: updList
            };

        default:
            return {...state};
    }
}

export default contacts;