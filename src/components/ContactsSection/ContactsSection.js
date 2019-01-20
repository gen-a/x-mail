import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import NewMailModalWindow from "../NewMailModalWindow/NewMailModalWindow";
import ContactList from "../ContactList/ContactList";

import "./ContactsSection.scss";

const mapStateToProps = (state) => {
    return {
        isCollapsedLeftSideBar: state.layout.isCollapsedLeftSideBar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMails: () => {
            dispatch({
                type: 'FETCH_CONTACTS',
                payload: axios.get("http://localhost:3000/assets/contacts.json")
            })
        }
    }
};

class ContactsSection extends Component {
    componentDidMount() {
        this.props.fetchMails();
    }

    render() {

        let activeList = this.props.match.params.list || "inbox";

        const { isCollapsedLeftSideBar } = this.props;

        let leftSidebarClassName = "ContactsSection__left_sidebar";
        if (isCollapsedLeftSideBar) {
            leftSidebarClassName += " ContactsSection__left_sidebar_is_collapsed";
        }

        return (
            <Fragment>
                <div className="ContactsSection">
                    <header className="ContactsSection__header">
                        <Header/>
                    </header>
                    <div className="ContactsSection__body_container">
                        <div className={leftSidebarClassName}>

                        </div>
                        <div className="ContactsSection__main_content">
                            <Switch>
                                <Route path="/contacts"
                                       render={(props) => <ContactList {...props} activeList={activeList}/>} />
                            </Switch>
                            <NewMailModalWindow />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsSection);
