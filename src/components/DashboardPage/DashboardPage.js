import React, {Component, Fragment} from 'react';

import MailList from "../MailList/MailList";
import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import NewMailModalWindow from "../NewMailModalWindow/NewMailModalWindow";
import Container from "../Layout/Container/Container";
import Menu from "../Menu/Menu";

class DashboardPage extends Component {
    state = {};

    render() {
        const {
            data,
            updateMailAttribute,
            toggleLeftSideBar,
            saveNewMessage,
            closeNewMessageWindow,
            openNewMessageWindow,
            changeActiveList,
            listLengths

        } = this.props;

        data.activeList = this.props.match.params.list || "inbox";

        return (
            <Fragment>
                <Layout
                    header={
                        <Header toggleLeftSideBar={toggleLeftSideBar}/>
                    }
                    leftSidebar={
                        <Container isExpanded={data.isActiveLeftSideBar}>
                            <Menu
                                openNewMessageWindow={openNewMessageWindow}

                                changeActiveList={changeActiveList}
                                activeList={data.activeList}
                                isExpanded={data.isActiveLeftSideBar}

                                listLengths={listLengths}/>
                        </Container>
                    }
                    mainContent={
                        <Container>
                            <MailList
                                mails={data.mailList[data.activeList]}
                                updateMailAttribute={updateMailAttribute}
                            />
                            <NewMailModalWindow
                                isOpen={data.isOpenNewMessageWindow}
                                saveNewMessage={saveNewMessage}
                                closeNewMessageWindow={closeNewMessageWindow}
                            />
                        </Container>
                    }/>
            </Fragment>

        );
    }
}

export default DashboardPage;