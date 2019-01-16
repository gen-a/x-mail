import React, {Component, Fragment} from 'react';


class Contact extends Component {

    render() {
        return (
            <Fragment>
                <div>Contact {this.props.match.params.id}</div>
            </Fragment>
        );
    }
}

export default Contact;