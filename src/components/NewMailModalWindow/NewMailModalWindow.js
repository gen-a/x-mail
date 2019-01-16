import React, {Fragment} from 'react';
import ModalWindow from "../ModalWindow/ModalWindow";
import NewMailForm from "../NewMailForm/NewMailForm";

const NewMailModalWindow = (props) => {
    return (
        <Fragment>
            <ModalWindow
                title="Create new mail"
                onClose={props.closeNewMessageWindow}
                isOpen = {props.isOpen}
            >
                <NewMailForm
                    isActive = {props.isOpen}
                    onSave = {props.saveNewMessage} />
            </ModalWindow>
        </Fragment>
    );
};

export default NewMailModalWindow;