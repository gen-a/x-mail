import React, {Component, Fragment} from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchMails} from "../../actions/mails";

import MailList from "../MailList/MailList";
import Header from "../Header/Header";
import NewMailModalWindow from "../NewMailModalWindow/NewMailModalWindow";
import Menu from "../Menu/Menu";
import {Route, Switch} from "react-router-dom";
import Mail from "../Mail/Mail";

import "./MailsSection.scss";
import Loader from "../Loader/Loader";

class MailsSection extends Component {
    componentDidMount() {
        this.props.fetchMails();
    }

    render(params) {

        let activeList = this.props.match.params.list || "inbox";
        let location = this.props.location;

        const {isCollapsedLeftSideBar} = this.props;

        let leftSidebarClassName = "MailsSection__left_sidebar";
        if (isCollapsedLeftSideBar) {
            leftSidebarClassName += " MailsSection__left_sidebar_is_collapsed";
        }

        return (
            <Fragment>
                <div className="MailsSection">
                    <header className="MailsSection__header">
                        <Header/>
                    </header>
                    <div className="MailsSection__body_container">
                        <div className={leftSidebarClassName}>
                            <Menu activeList={activeList}/>
                        </div>
                        <div className="MailsSection__main_content">
                            <TransitionGroup>
                                {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={300}
                                >
                                    <Switch location={location}>
                                        <Route path="/mails/:list(outbox|inbox)/:id"
                                               render={(props) => <Mail {...props} activeList={activeList}/>}/>
                                        <Route path="/mails/:list(outbox|inbox)"
                                               render={(props) => <MailList {...props} activeList={activeList}/>}/>
                                        <Route path="/mails"
                                               render={(props) => <MailList {...props} activeList={activeList}/>}/>
                                        <Route path="/"
                                               render={(props) => <MailList {...props} activeList={activeList}/>}/>
                                    </Switch>
                                </CSSTransition></TransitionGroup>
                            <NewMailModalWindow/>
                            <Loader/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isCollapsedLeftSideBar: state.layout.isCollapsedLeftSideBar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMails: () => dispatch(fetchMails()),
        fetchMailsLocal: () => {
            dispatch({
                type: 'FETCH_MAILS',
                payload: axios.get("http://localhost:3000/assets/mails.json")
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MailsSection);
