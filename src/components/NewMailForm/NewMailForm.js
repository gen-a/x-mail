import React, {Component, Fragment} from 'react';

import './NewMailForm.scss';

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
    save() {
        this.props.onSave({...this.state});
        this.setState({
            subject: "",
            body: ""
        });
    };

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
                            this.save()
                        }}

                >Save
                </button>
            </Fragment>
        );
    }
}

export default NewMailForm;