import React, {Fragment} from 'react';
import ModalWindow from "../ModalWindow/ModalWindow";
import NewMailForm from "../NewMailForm/NewMailForm";
import {connect} from 'react-redux';
import {CLOSE_NEW_MAIL_WINDOW} from '../../actions/layout';

const mapStateToProps = (state) => {
    return {
        isOpen: state.layout.isOpenNewMessageWindow
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeNewMailWindow: () => {
            dispatch({type: CLOSE_NEW_MAIL_WINDOW});
        }
    }
};


const NewMailModalWindow = (props) => {
    return (
        <Fragment>
            <ModalWindow
                title="Create new mail"
                onClose={() => (props.closeNewMailWindow())}
                isOpen = {props.isOpen}
            >
                <NewMailForm
                    isActive = {props.isOpen}
                />
            </ModalWindow>
        </Fragment>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMailModalWindow);
