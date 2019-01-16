import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import DashboardPage from "./components/DashboardPage/DashboardPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import MailPage from "./components/MailPage/MailPage";

class App extends Component {
    state = {
        isOpenNewMessageWindow: false,
        isActiveLeftSideBar: true,
        activeList: "inbox",
        mailList: {
            inbox: [
                {
                    id: 0,
                    isRead: true,
                    starred: false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                },
                {
                    id: 1,
                    isRead: false,
                    starred: false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                },
                {
                    id: 2,
                    isRead: false,
                    starred: false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                }
            ],
            outbox: [
                {
                    id: 3,
                    isRead: false,
                    starred: false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                },
                {
                    id: 4,
                    isRead: false,
                    starred: false,
                    from: "example@email",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit diam sodales sapien elementum aliquet. Cras non aliquet sem. Duis leo dui, dictum scelerisque molestie ut, semper sit amet sem. Ut nec metus et ex ornare fermentum eu eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    subject: "Mail Subject"
                }
            ]
        }
    };

    toggleLeftSideBar = () => {
        this.setState({
            isActiveLeftSideBar: !this.state.isActiveLeftSideBar
        });
    };

    changeActiveList(id) {
        this.setState({
            activeList: id
        });
    }

    saveNewMessage(data) {

        data.id = this.state.mailList.inbox.length + this.state.mailList.outbox.length;
        data.starred = false;
        data.status = true;
        let outboxMailList = this.state.mailList.outbox.slice();

        outboxMailList.unshift(data);

        let mailList = {...this.state.mailList};
        mailList.outbox = outboxMailList;

        this.setState({
            mailList: mailList,
            isOpenNewMessageWindow: false,
        });

    };



    getListLengths = () => {
        let mailQuantities = {};
        for (let p in this.state.mailList) {
            if(this.state.mailList.hasOwnProperty(p)){
                mailQuantities[p] = this.state.mailList[p].length;
            }
        }
        return mailQuantities;
    };

    closeNewMessageWindow() {
        this.setState({
            isOpenNewMessageWindow: false
        })
    };

    openNewMessageWindow() {
        this.setState({
            isOpenNewMessageWindow: true
        })
    };


    updateMailAttribute = (id, attributeName, value) => {
        let {mailList, activeList} = this.state;
        let mails = mailList[activeList].slice();
        let updatedMails = mails.map((item) => {
            let newItem = {...item};
            if (newItem.id === id) {
                newItem[attributeName] = value;
            }
            return newItem;
        });

        this.setState({
            mailList: {
                ...mailList,
                [activeList]: updatedMails
            }
        });
    };


    render() {

        const common = {
            data:this.state,
            changeActiveList:(id) => this.changeActiveList(id),
            closeNewMessageWindow:() => this.closeNewMessageWindow(),
            openNewMessageWindow:() => this.openNewMessageWindow(),
            saveNewMessage:(mail) => this.saveNewMessage(mail),
            toggleLeftSideBar:(value) => this.toggleLeftSideBar(value),
            listLengths:this.getListLengths()
        };

        return (
            <Switch>
                <Route path="/mail/:id"
                       render={(props) => <MailPage  {...props} {...common} updateMailAttribute={(id, name, value) => this.updateMailAttribute(id, name, value)} />}
                />
                <Route path="/contacts"
                       render={(props) => <ContactsPage  {...props} {...common} />}
                />
                <Route path="/:list(outbox|inbox)"
                       render={(props) => <DashboardPage  {...props} {...common} updateMailAttribute={(id, name, value) => this.updateMailAttribute(id, name, value)} />}
                />
                <Route exact
                       path="/"
                       render={(props) => <DashboardPage  {...props} {...common} updateMailAttribute={(id, name, value) => this.updateMailAttribute(id, name, value)} />}
                />
            </Switch>
        );

    }
}

export default App;
