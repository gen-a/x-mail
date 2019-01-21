import {
    DEL_MAIL_FULFILLED,
    DEL_MAIL_REJECTED,
    DEL_MAIL_PENDING,
    FETCH_MAILS_FULFILLED,
    FETCH_MAILS_REJECTED,
    FETCH_MAILS_PENDING,
    UPD_MAIL_ATTRIBUTE_PENDING,
    UPD_MAIL_ATTRIBUTE_FULFILLED,
    UPD_MAIL_ATTRIBUTE_REJECTED,
    TOGGLE_OPEN_MAIL,
    SEND_MAIL
} from '../actions/mails';


const initialState = {
    isFetching:false,
    error:'',
    opened: [],
    mailFolders: [
        {status: true, name: "Inbox", id: "inbox"},
        {status: true, name: "Outbox", id: "outbox"}
    ],
    mailList: {
        inbox: [],
        outbox: []
    }

};

function mails(state = initialState, action) {

    switch (action.type) {
        case UPD_MAIL_ATTRIBUTE_PENDING:
            return {
                ...state,
                isFetching:true
            };
        case UPD_MAIL_ATTRIBUTE_FULFILLED:
            return {
                ...state,
                isFetching:false,
                mailList:action.payload.mailList
            };
        case UPD_MAIL_ATTRIBUTE_REJECTED:
            return {
                ...state,
                isFetching:false,
                error:action.payload
            };
        case DEL_MAIL_PENDING:
            return {
                ...state,
                isFetching:true
            };
        case DEL_MAIL_FULFILLED:
            return {
                ...state,
                isFetching:false,
                mailList:action.payload.mailList
            };
        case DEL_MAIL_REJECTED:
            return {
                ...state,
                isFetching:false,
                error:action.payload
            };

        case FETCH_MAILS_PENDING:
            return {
                ...state,
                isFetching:true
            };
        case FETCH_MAILS_FULFILLED:
            return {
                ...state,
                isFetching:false,
                mailList:action.payload.data
            };
        case FETCH_MAILS_REJECTED:
            return {
                ...state,
                isFetching:false,
                error:action.payload
            };

        case SEND_MAIL:
            let updatedSentMailList = [...state.mailList.outbox];
            updatedSentMailList.push(action.payload);
            return {
                ...state,
                mailList: {
                    ...state.mailList,
                    outbox: [...updatedSentMailList]
                }
            };

        case TOGGLE_OPEN_MAIL:
            return {
                ...state,
                opened: action.payload.opened
            };

        default:
            return {...state};
    }
}

export default mails;