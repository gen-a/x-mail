import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import InputFile from "../Gn/GnInputFile";
import Input from "../Gn/GnInput";
import {required,matchEmails} from "../../validation/formFieldValidation"

class FeedbackForm extends Component {

    render(){
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="attachment" component={InputFile} type="file"/>

                <Field name="email" component={Input}
                       type="text" placeholder="Your e-mail..."
                    validate={[required, matchEmails]}
                />

                <Field name="emailAgain" component={Input}
                       type="text" placeholder="Your e-mail..."  />


                <Field name="message" component={Input}
                       type="textarea" placeholder="Message"
                        validate={[required]} />

                <button type="submit" label="submit">Send</button>
            </form>
        );
    }
}
//export default reduxForm({ form: 'feedback', validate:validate })(FeedbackForm);
export default reduxForm({ form: 'feedback' })(FeedbackForm);