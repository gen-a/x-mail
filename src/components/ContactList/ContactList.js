import React, {Component, Fragment} from 'react';
import ResponsiveIcon from "../RippleIcon/RippleIcon";
import {MdDelete} from 'react-icons/md';
import {connect} from 'react-redux';
import {DEL_CONTACT, UPD_CONTACT_ATTRIBUTE} from "../../actions/contacts";

import './ContactList.scss';

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contactList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        delContact: (id) => {
            dispatch({type: DEL_CONTACT, payload: {id: id}});
        },
        updContactAttribute: (id, name, value) => {
            dispatch({type: UPD_CONTACT_ATTRIBUTE, payload: {id: id, name: name, value: value}});
        }
    }
};

class ContactList extends Component {



    render() {

        const {contacts} = this.props;

        const listItems = contacts.map((contact) => {

            return (
                <li key={contact.id} className="ContactList__entry">
                    <div className="ContactList__entry_info">

                        <div className="ContactList__entry_name">
                            {contact.name} {contact.surname}
                        </div>
                        <div className="ContactList__entry_email">
                            {contact.email}
                        </div>

                        <div className="ContactList__entry_tool">
                            <ResponsiveIcon
                                size={24}
                                style={{margin: '3px'}}
                                onClick={() => this.props.delContact(contact.id)}
                            >
                                <MdDelete/>
                            </ResponsiveIcon>
                        </div>
                    </div>
                </li>
            )
        });

        return (<Fragment>
            <ul className="ContactList__entries">
                {listItems}
            </ul>
        </Fragment>);
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);