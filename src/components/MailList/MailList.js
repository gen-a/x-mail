import React, {Component, Fragment} from 'react';
import ResponsiveIcon from "../RippleIcon/RippleIcon";
import {MdDelete, MdDescription, MdExpandMore, MdMarkunread, MdDrafts, MdStarBorder, MdStar} from 'react-icons/md';
import {IconContext} from "react-icons";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {delMail,updMailAttribute,toggleOpenMail} from "../../actions/mails";

import './MailList.scss';

class MailList extends Component {

    toggleMail = (id) => {
        this.props.toggleOpenMail(id);
        this.props.updMailAttribute(id, 'isRead', true);
    };

    getIfClass = (baseClass, additionalClass, condition) => {
        if (condition) {
            baseClass += " " + additionalClass;
        }
        return baseClass;
    };

    render() {

        const {mails, activeList, opened} = this.props;

        const listItems = mails[activeList].map((mail) => {

            let bodyClass = this.getIfClass(
                "MailList__entry_body",
                "MailList__entry_body_is_open",
                opened.indexOf(mail.id) !== -1
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
                            <IconContext.Provider value={{size: 16, color: '#d27641'}}>
                                <div style={{margin: '4px', cursor: 'pointer'}}
                                     onClick={() =>
                                         this.props.updMailAttribute(mail.id, 'starred', !mail.starred)
                                     }>
                                    {starIcon}
                                </div>
                            </IconContext.Provider>
                        </div>

                        <div className="MailList__entry_tool">
                            <IconContext.Provider value={{size: 16, color: '#bec2d2'}}>
                                <div style={{margin: '4px', cursor: 'pointer'}}
                                     onClick={() =>
                                         this.props.updMailAttribute(mail.id, 'isRead', !mail.isRead)
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

                            <NavLink to={"/mails/" + activeList + "/" + mail.id}>
                                <ResponsiveIcon
                                    size={24}
                                    iconSize={16}
                                    style={{margin: '3px'}}
                                >
                                    <MdDescription/>
                                </ResponsiveIcon>
                            </NavLink>

                        </div>
                        <div className="MailList__entry_tool">
                            <ResponsiveIcon
                                size={24}
                                style={{margin: '3px'}}
                                onClick={() => this.props.delMail(mail.id)}
                            >
                                <MdDelete/>
                            </ResponsiveIcon>
                        </div>
                        <div className="MailList__entry_tool">
                            <ResponsiveIcon
                                size={24}
                                style={{margin: '3px'}}
                                onClick={() => this.toggleMail(mail.id)}
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

const mapStateToProps = (state) => {
    return {
        mails: state.mails.mailList,
        opened: state.mails.opened
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        delMail: (id) => dispatch(delMail(id)),
        updMailAttribute: (id, name, value) => dispatch(updMailAttribute(id, name, value)),
        toggleOpenMail: (id, opened) => dispatch(toggleOpenMail(id, opened))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MailList);