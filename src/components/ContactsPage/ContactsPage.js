import React, {Component, Fragment} from 'react';

import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import NewMailModalWindow from "../NewMailModalWindow/NewMailModalWindow";
import Container from "../Layout/Container/Container";
import Menu from "../Menu/Menu";
import Contacts from "../Contacts/Contacts";

class ContactsPage extends Component {
    state = {};

    render() {
        const {
            data,
            toggleLeftSideBar,
            saveNewMessage,
            closeNewMessageWindow,
            openNewMessageWindow,
            changeActiveList,
            listLengths

        } = this.props;

        return (
            <Fragment>
                <Layout
                    header={<Header toggleLeftSideBar={toggleLeftSideBar}/>}
                    leftSidebar = {
                        <Container isExpanded={data.isActiveLeftSideBar}>
                            <Menu openNewMessageWindow={openNewMessageWindow}

                                  changeActiveList={changeActiveList}
                                  activeList={data.activeList}
                                  isExpanded={data.isActiveLeftSideBar}

                                  listLengths={listLengths}/>
                        </Container>
                    }
                    mainContent = {
                        <Container>
                            <Contacts/>
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

export default ContactsPage;