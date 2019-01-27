import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import MailsSection from "./components/MailsSection/MailsSection";
import ContactsSection from "./components/ContactsSection/ContactsSection";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route path="/mails/:list(outbox|inbox)" component={MailsSection}/>
                <Route path="/mails" component={MailsSection} />} />
                <Route path="/contacts" component={ContactsSection} />} />
                <Route path="/feedback" component={FeedbackSection} />} />
                <Route path="/" component={MailsSection} />} />
            </Switch>
        );
    }
}

export default App;
