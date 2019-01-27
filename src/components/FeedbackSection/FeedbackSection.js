import React, {Component, Fragment} from 'react';
import FeedbackForm from "../FeedbackForm/FeedbackForm";


class FeedbackSection extends Component {
    state={
        email:'',
        message:''
    };
    submit=(value) => {
       console.log(value);
    };
    getInitialValues = () => {
        return {
            email:"foo@sdfsdfsd.dfg",
            message:"message"
        }
    };
    render() {


        return (
            <Fragment>
                <FeedbackForm onSubmit = {this.submit} initialValues={this.getInitialValues()}/>
            </Fragment>
        );
    }
}


export default FeedbackSection;
