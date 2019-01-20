import {EXPAND_LEFT_SIDEBAR, COLLAPSE_LEFT_SIDEBAR, OPEN_NEW_MAIL_WINDOW, CLOSE_NEW_MAIL_WINDOW} from '../actions/layout';

const initialState = {
    isCollapsedLeftSideBar: false,
    isOpenNewMessageWindow: false,
};

function layout(state = initialState, action) {
    switch (action.type) {
        case OPEN_NEW_MAIL_WINDOW:
            return {
                ...state,
                isOpenNewMessageWindow:true
            };
        case CLOSE_NEW_MAIL_WINDOW:
            return {
                ...state,
                isOpenNewMessageWindow:false
            };

        case EXPAND_LEFT_SIDEBAR:
            return {
                ...state,
                isCollapsedLeftSideBar:false
            };
        case COLLAPSE_LEFT_SIDEBAR:
            return {
                ...state,
                isCollapsedLeftSideBar:true
            };
        default:
            return {...state};
    }
}

export default layout;