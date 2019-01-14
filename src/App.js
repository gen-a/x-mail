import React, {Component, Fragment} from 'react';

import Header from "./components/Header/Header";
import MailList from "./components/MailList/MailList";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import NewMailForm from "./components/NewMailForm/NewMailForm";

import './App.scss';
import Menu from "./components/Menu/Menu";


class App extends Component {
    state = {
        newMessageWindowIsOpen:false,
        leftSideBarIsActive:true,
        activeList: "inbox",
        mailList: {
            inbox: [
                {
                    id: 0,
                    status: true,
                    starred:false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                },
                {
                    id: 1,
                    status: false,
                    starred:false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                },
                {
                    id: 2,
                    status: false,
                    starred:false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                }
            ],
            outbox: [
                {
                    id: 3,
                    status: false,
                    starred:false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                },
                {
                    id: 4,
                    status: false,
                    starred:false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                }
            ]
        }
    };

    setMenuActiveStatus = (isActive) =>{
        this.setState({
            leftSideBarIsActive: isActive
        });
    };

    changeActiveList = (id) => {
        this.setState({
            activeList: id
        });
    };
    changeMailStatusTo= (id, value) =>{
        let mails = this.state.mailList[this.state.activeList].slice();

        let upd = mails.map((item) => {
            let newItem = {...item};
            if (newItem.id === id) {
                newItem.status = value;
            }
            return newItem;
        });

        this.setState({mailList:{
            ...this.state.mailList,
            [this.state.activeList]:upd
        }});

    };

    changeMailStarred= (id, value) =>{

        let mails = this.state.mailList[this.state.activeList].slice();

        let upd = mails.map((item) => {
            let newItem = {...item};
            if (newItem.id === id) {
                newItem.starred = value;
            }
            return newItem;
        });

        this.setState({mailList:{
            ...this.state.mailList,
            [this.state.activeList]:upd
        }});



    };
    changeMailStatus = (id) => {

        let mails = this.state.mailList[this.state.activeList].slice();

        let upd = mails.map((item) => {
            let newItem = {...item};
            if (newItem.id === id) {
                newItem.status = true;
            }
            return newItem;
        });

        this.setState({mailList:{
            ...this.state.mailList,
            [this.state.activeList]:upd
        }});

    };
    saveNewMessage(data){

        data.id = this.state.mailList.inbox.length+this.state.mailList.outbox.length;

        let outboxMailList = this.state.mailList.outbox.slice();

        outboxMailList.unshift(data);

        let mailList = { ...this.state.mailList };
        mailList.outbox = outboxMailList;

        this.setState({
            mailList:mailList,
            newMessageWindowIsOpen:false,
        });

    };
    closeNewMessageWindow(){
        this.setState({
            newMessageWindowIsOpen:false
        })
    };
    openNewMessageWindow(){
        this.setState({
            newMessageWindowIsOpen:true
        })
    };


    render() {
        const {activeList, leftSideBarIsActive, mailList, newMessageWindowIsOpen}= this.state;

        let getLeftSidebarClassName = () =>{
            let className ="App__left_sidebar";
            if(leftSideBarIsActive){
                className += " App__left_sidebar_is_active";
            }
            return className;
        };

        return <Fragment>
            <div className="App">

                <Header
                    menuToggleStatus = { leftSideBarIsActive }
                    setMenuActiveStatus = { (isActive) => this.setMenuActiveStatus(isActive) }
                />

                <div className="App__body_container">

                    <div className={getLeftSidebarClassName()}>
                    <Menu
                        isActive = {leftSideBarIsActive}


                        openNewMessageWindow={this.openNewMessageWindow.bind(this)}
                        mailList={mailList}
                        active={activeList}
                        changeActiveList={this.changeActiveList.bind(this)}
                    />
                    </div>
                    <div className="App__main_content">
                    <MailList mails={mailList[activeList]}
                              changeMailStatus={this.changeMailStatus.bind(this)}
                              toggleMailStar = {(id, value)=> this.changeMailStarred(id, value)}
                              toggleMailStatus = {(id, value)=> this.changeMailStatusTo(id, value)}
                    />
                    </div>
                </div>

            </div>

            <ModalWindow
                title="Create new mail"
                onClose={()=>this.closeNewMessageWindow()}
                isOpen = {newMessageWindowIsOpen}
            >
                <NewMailForm onSave = {this.saveNewMessage.bind(this)} />
            </ModalWindow>
        </Fragment>;
    }
}

export default App;
