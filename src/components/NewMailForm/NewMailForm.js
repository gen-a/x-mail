import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SEND_MAIL} from "../../actions/mails";
import {CLOSE_NEW_MAIL_WINDOW} from "../../actions/layout";
import uuidv4 from 'uuid/v4';




import './NewMailForm.scss';

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMail: (data) => {
            dispatch({type: SEND_MAIL, payload: data});
        },
        closeNewMailWindow: () => {
            dispatch({type: CLOSE_NEW_MAIL_WINDOW});
        }
    }
};



class NewMailForm extends Component {
    state = {
        subject: '',
        body: '',
        from: 'my-email@example.com'
    };
    onPressEnter(event){
        if(event.keyCode === 13 && this.props.isActive) {
            this.save();
        }
    }
    componentDidMount(){
        document.addEventListener("keydown", (e) => this.onPressEnter(e), false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", (e) => this.onPressEnter(e), false);
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        })
    };

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        })
    };

    submit(){

        this.props.sendMail({
            ...this.state,
            id:uuidv4()
        });

        this.setState({
            subject: '',
            body: ''
        });

        this.props.closeNewMailWindow()
    }

    render() {

        const {subject, body} = this.state;

        return (
            <Fragment>
                <div className="NewMailForm__field">
                    <label className="NewMailForm__label">Subject</label>
                    <input className="NewMailForm__input_text"
                           value={subject}
                           onChange={(e) => {
                               this.onChangeSubject(e)
                           }}
                    />
                </div>

                <div className="NewMailForm__field">
                    <label className="NewMailForm__label">Body</label>
                    <textarea className="NewMailForm__textarea"
                              value={body}
                              onChange={(e) => {
                                  this.onChangeBody(e)
                              }}
                    />
                </div>

                <button className="NewMailForm__button"
                        onClick={() => {
                            this.submit()
                        }}

                >Save
                </button>
            </Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewMailForm);
