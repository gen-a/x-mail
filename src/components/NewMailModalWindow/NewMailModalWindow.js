import React, {Fragment} from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'
import {connect} from 'react-redux'
import {reset} from 'redux-form'
import {CLOSE_NEW_MAIL_WINDOW} from '../../actions/layout'
import NewMailForm from '../NewMailForm/NewMailForm'




const NewMailModalWindow = (props) => {
    return (
        <Fragment>
            <ModalWindow
                title="Create new mail"
                onClose={() => (props.closeNewMailWindow())}
                isOpen = {props.isOpen}
            >
                <NewMailForm />
            </ModalWindow>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        isOpen: state.layout.isOpenNewMessageWindow
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeNewMailWindow: () => {
            dispatch({type: CLOSE_NEW_MAIL_WINDOW});
            dispatch(reset('newMail'));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMailModalWindow);
