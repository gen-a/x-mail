import axios from 'axios';

export const UPD_MAIL_ATTRIBUTE_PENDING = 'UPD_MAIL_ATTRIBUTE_PENDING';
export const UPD_MAIL_ATTRIBUTE_FULFILLED = 'UPD_MAIL_ATTRIBUTE_FULFILLED';
export const UPD_MAIL_ATTRIBUTE_REJECTED = 'UPD_MAIL_ATTRIBUTE_REJECTED';

export const DEL_MAIL_PENDING = 'DEL_MAIL_PENDING';
export const DEL_MAIL_FULFILLED = 'DEL_MAIL_FULFILLED';
export const DEL_MAIL_REJECTED = 'DEL_MAIL_REJECTED';

export const SEND_MAIL = 'SEND_MAIL';

export const TOGGLE_OPEN_MAIL = 'TOGGLE_OPEN_MAIL';

export const FETCH_MAILS_PENDING = 'FETCH_MAILS_PENDING';
export const FETCH_MAILS_FULFILLED = 'FETCH_MAILS_FULFILLED';
export const FETCH_MAILS_REJECTED = 'FETCH_MAILS_REJECTED';

export function fetchMails() {
    return (dispatch, getState) => {
        dispatch(
            {type: DEL_MAIL_PENDING, payload: {isFetching: true}}
        );
        // read inbox mails
        let mailList = {};

        axios.get('https://next.json-generator.com/api/json/get/NkO3JQZQ8')
            .then((result) => {
                mailList.inbox = result.data;
                return axios.get('https://next.json-generator.com/api/json/get/4JxUPQWmL')
            })
            .then((result) => {
                mailList.outbox = result.data;
                dispatch(
                    {type: FETCH_MAILS_FULFILLED, payload: {data:mailList}}
                )
            })
            .catch(err=>dispatch({type: FETCH_MAILS_REJECTED, payload: err}))
    }
}

export function delMail(id) {
    return (dispatch, getState) => {
        dispatch(
            {type: DEL_MAIL_PENDING, payload: {isFetching: true}}
        );
        let mailList = getState().mails.mailList;
        setTimeout(() => {

            let newMailList = {...mailList};
            for (let listName in newMailList) {
                if (newMailList.hasOwnProperty(listName)) {
                    newMailList[listName] = newMailList[listName].filter(
                        (object) => object.id !== id
                    );
                }
            }
            dispatch(

            {type:DEL_MAIL_FULFILLED, payload:{mailList: newMailList}}

            )
        }, 1000);
    }
}

export function updMailAttribute(id, name, value) {
    return (dispatch, getState) => {
        dispatch(
            {type: UPD_MAIL_ATTRIBUTE_PENDING, payload: {isFetching: true}}
        );
        let mailList = getState().mails.mailList;
        setTimeout(() => {
            let newMailList = {...mailList};
            for (let listName in newMailList) {
                if (newMailList.hasOwnProperty(listName)) {
                    newMailList[listName] = newMailList[listName].map(
                        (object) => {
                            let newItem = {...object};
                            if (newItem.id === id) {
                                newItem[name] = value;
                            }
                            return newItem;
                        }
                    );
                }
            }
            dispatch(
                {type: UPD_MAIL_ATTRIBUTE_FULFILLED, payload: {mailList: newMailList}}
            )
        }, 1000);
    }
}

export function toggleOpenMail(id) {
    return (dispatch, getState) => {

        let newOpened = getState().mails.opened.slice();

        if (newOpened.includes(id)) {
            newOpened.splice(newOpened.indexOf(id), 1);
        } else {
            newOpened.push(id);
        }
        dispatch(

            {type: TOGGLE_OPEN_MAIL, payload: {opened: newOpened}}
        );
    }
}


