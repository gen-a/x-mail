import React, {Component, Fragment} from 'react';

import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import NewMailModalWindow from "../NewMailModalWindow/NewMailModalWindow";
import Container from "../Layout/Container/Container";
import Menu from "../Menu/Menu";
import Mail from "../Mail/Mail";


class MailPage extends Component {
    state = {};

    findById(object, id){
        for (let p in object) {
            if(object.hasOwnProperty(p)){
                if(object[p] instanceof Array ){
                    let found = this.findById(object[p], id);
                    if(found !== null){
                        return found;
                    }
                }else{
                    if(object[p].id === id){
                        return object[p];
                    }
                }
            }
        }
        return null;
    }



    render() {
        const {
            data,
            toggleLeftSideBar,
            saveNewMessage,
            closeNewMessageWindow,
            openNewMessageWindow,
            changeActiveList,
            listLengths,
            match,
            updateMailAttribute
        } = this.props;

        let getMailData = () => {
            return this.findById(data.mailList, parseInt(match.params.id));
        };

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
                            <Mail data={getMailData()} updateMailAttribute={updateMailAttribute}/>
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

export default MailPage;