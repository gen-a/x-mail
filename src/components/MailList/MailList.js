import React, {Component, Fragment} from 'react';
import ResponsiveIcon from "../RippleIcon/RippleIcon";
import {MdExpandMore, MdMarkunread, MdDrafts, MdStarBorder, MdStar} from 'react-icons/md';
import {IconContext} from "react-icons";

import './MailList.scss';

class MailList extends Component {
    state = {
        opened: []
    };

    toggleMail = (mail) => {
        let opened = this.state.opened.slice();
        if (opened.includes(mail.id)) {
            opened.splice(opened.indexOf(mail.id), 1);
        } else {
            opened.push(mail.id);
            if (!mail.status) {
                this.props.updateMailAttribute(mail.id, 'isRead', true);
            }
        }
        this.setState({
            opened: opened
        });
    };

    getIfClass = (baseClass, additionalClass, condition) =>{
        if(condition){
            baseClass += " "+additionalClass;
        }
        return baseClass;
    };

    render() {
            const listItems = this.props.mails.map((mail) => {

            let bodyClass = this.getIfClass(
                "MailList__entry_body",
                "MailList__entry_body_is_open",
                this.state.opened.indexOf(mail.id) !== -1
            );

            let subjectClass = this.getIfClass(
                "MailList__entry_subject",
                "MailList__entry_subject_emphasized",
                !mail.isRead
             );


            let readIcon = mail.isRead ? <MdDrafts/> : <MdMarkunread/>;
            let starIcon = mail.starred ? <MdStar/> : <MdStarBorder/>;

            return (
                <li key={mail.id} className="MailList__entry">
                    <div className="MailList__entry_info">

                        <div className="MailList__entry_tool">
                            <IconContext.Provider value={{size:16, color:'#d27641'}}>
                                <div style={{margin:'4px',cursor:'pointer'}}
                                     onClick={() =>
                                         this.props.updateMailAttribute(mail.id, 'starred', !mail.starred)
                                     }>
                                    {starIcon}
                                </div>
                            </IconContext.Provider>
                        </div>

                        <div className="MailList__entry_tool">
                           <IconContext.Provider value={{size:16, color:'#bec2d2'}}>
                                <div style={{margin:'4px',cursor:'pointer'}}
                                     onClick={() =>
                                         this.props.updateMailAttribute(mail.id, 'isRead', !mail.isRead)
                                     }>
                                    {readIcon}
                                </div>
                            </IconContext.Provider>
                        </div>

                        <div className="MailList__entry_from">
                            {mail.from}
                        </div>
                        <div className={subjectClass}>
                            {mail.subject}
                        </div>
                        <div className="MailList__entry_tool">
                            <ResponsiveIcon
                                size={24}
                                style={{margin: '3px'}}
                                onClick={() => this.toggleMail(mail)}
                            >
                                <MdExpandMore/>
                            </ResponsiveIcon>
                        </div>
                    </div>
                    <div className={bodyClass}>
                        {mail.body}
                    </div>
                </li>
            )
        });

        return (<Fragment>
            <ul className="MailList__entries">
                {listItems}
            </ul>
        </Fragment>);
    }

}

export default MailList;