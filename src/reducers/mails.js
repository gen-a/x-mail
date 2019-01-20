import {FETCH_MAILS_FULFILLED, FETCH_MAILS_REJECTED, FETCH_MAILS_PENDING, DEL_MAIL, UPD_MAIL_ATTRIBUTE, TOGGLE_OPEN_MAIL, SEND_MAIL} from '../actions/mails';


const initialState = {
    fetching:false,
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
    let newMailList;

    switch (action.type) {
        case FETCH_MAILS_PENDING:
            return {
                ...state,
                fetching:true
            };
        case FETCH_MAILS_FULFILLED:
            return {
                ...state,
                fetching:true,
                mailList:action.payload.data
            };
        case FETCH_MAILS_REJECTED:
            return {
                ...state,
                fetching:true,
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

        case DEL_MAIL:
            newMailList = {...state.mailList};
            for (let listName in newMailList) {
                if (newMailList.hasOwnProperty(listName)) {
                    newMailList[listName] = newMailList[listName].filter(
                        (object) => object.id !== action.payload.id
                    );
                }
            }
            return {
                ...state,
                mailList: newMailList
            };

        case UPD_MAIL_ATTRIBUTE:
            newMailList = {...state.mailList};
            for (let listName in newMailList) {
                if (newMailList.hasOwnProperty(listName)) {
                    newMailList[listName] = newMailList[listName].map(
                        (object) => {
                            let newItem = {...object};
                            if (newItem.id === action.payload.id) {
                                newItem[action.payload.name] = action.payload.value;
                            }
                            return newItem;
                        }
                    );
                }
            }
            return {
                ...state,
                mailList: newMailList
            };

        case TOGGLE_OPEN_MAIL:
            let opened = state.opened.slice();

            if (opened.includes(action.payload.id)) {
                opened.splice(opened.indexOf(action.payload.id), 1);
            } else {
                opened.push(action.payload.id);
            }

            return {
                ...state,
                opened: opened
            };

        default:
            return {...state};
    }
}

export default mails;