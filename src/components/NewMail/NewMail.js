import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {CLOSE_NEW_MAIL_WINDOW} from "../../actions/layout";
import NewMailForm from "../NewMailForm/NewMailForm";

import './NewMail.scss';

const mapDispatchToProps = (dispatch) => {
    return {
        closeNewMailWindow: () => {
            dispatch({type: CLOSE_NEW_MAIL_WINDOW});
        }
    }
};



class NewMail extends Component {

    getInitialValues = () => {
        return {
            email:"",
            body:"",
            subject:""
        }
    };

    render() {
        return (
            <Fragment>
                <NewMailForm initialValues={this.getInitialValues()}/>
            </Fragment>
        );
    }
}
export default connect(null, mapDispatchToProps)(NewMail);
