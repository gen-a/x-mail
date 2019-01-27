import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {email, required, maxLength, minLength} from '../../validation/validations'
import GnInput from '../Gn/GnInput'
import GnTextarea from '../Gn/GnTextarea'
import GnButton from '../Gn/GnButton'
import GnMessage from '../Gn/GnMessage'

import {addMail} from '../../actions/mails'

const validate = (values) => {
    let errors = {};

    if (!required(values.email)) {
        errors.email = 'E-mail is required';
    } else {
        if (!email(values.email)) {
            errors.email = 'E-mail has to be valid email';
        }
    }
    if (!required(values.subject)) {
        errors.subject = 'Subject is required';
    } else {
        if (!minLength(2)(values.subject) || !maxLength(5)(values.subject)) {
            errors.subject = 'Subject has tobe between 2 an d 5 chars length';
        }
    }
    if (!required(values.body)) {
        errors.body = 'Body is required';
    }
    return errors;
};

class NewMailForm extends Component {

    static defaultProps = {
        error: '',
        pristine: true,
        submitting: false,
        invalid: false,
        submitSucceeded: false
    };

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        error: PropTypes.string,
        pristine: PropTypes.bool,
        reset: PropTypes.func.isRequired,
        submitting: PropTypes.bool,
        invalid: PropTypes.bool,
        submitSucceeded: PropTypes.bool,
    };

    render() {
        const {handleSubmit, error, pristine, reset, submitting, invalid, submitSucceeded} = this.props;

        return (
            <form
                onSubmit={handleSubmit(this.props.addMail)}
                onKeyDown={e => e.keyCode === 13 && handleSubmit(this.props.addMail)()}
            >
                {submitting && <GnMessage message="Submitting..." type="info"/>}
                {error && <GnMessage message={error} type="error"/>}
                {submitSucceeded && <GnMessage message="Saved!!" type="success"/>}

                <Field
                    name="email"
                    component={GnInput}
                    type="text"
                    placeholder="E-mail"
                    label="E-mail"
                    required={true}
                />

                <Field
                    name="subject"
                    component={GnInput}
                    type="text"
                    placeholder="Subject"
                    label="Subject"
                    required={true}
                />

                <Field
                    name="body"
                    component={GnTextarea}
                    placeholder="Text Message"
                    label="Text Message"
                    required={true}
                />

                <div style={{textAlign: "center"}}>
                    <Field
                        name="submit"
                        component={GnButton}
                        type="submit"
                        label="Submit"
                        disabled={invalid || pristine || submitting}
                    />

                    <Field
                        name="reset"
                        component={GnButton}
                        type="reset"
                        label="Reset"
                        disabled={pristine || submitting}
                        action={reset}
                    />
                </div>

            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addMail: (data) => dispatch(addMail(data))
    }
};

export default reduxForm({
    form: 'newMail', validate
})(connect(null, mapDispatchToProps)(NewMailForm));


