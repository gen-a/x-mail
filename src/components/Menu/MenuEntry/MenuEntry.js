import React, {Component, Fragment} from 'react';
import {MdInbox, MdSend} from 'react-icons/md';
import {IconContext} from "react-icons";
import './MenuEntry.scss';
import {NavLink} from "react-router-dom";


class MenuEntry extends Component {

    getEntryIcon(id) {
        switch (id) {
            case 'inbox':
                return <MdInbox/>;
            case 'outbox':
                return <MdSend/>;
            default:
                return <MdInbox/>;
        }
    };

    render() {
        let {isActive, entry, number, changeActiveList} = this.props;
        let className = isActive ? "MenuEntry MenuEntry_is_active" : "MenuEntry";

        let iconStyle = isActive ? {color:'red'}:{};

        return (
            <Fragment>
                <NavLink to={"/"+entry.id} className={className}>

                        <IconContext.Provider value={{className: "MenuEntry__icon", ...iconStyle}}>
                            <div className="MenuEntry__icon_container">
                                {this.getEntryIcon(entry.id)}
                            </div>
                        </IconContext.Provider>
                        <div className="MenuEntry__name">
                            {entry.name}
                        </div>
                        <div className="MenuEntry__number">
                            {number}
                        </div>

                </NavLink>
            </Fragment>
        );
    }
}

export default MenuEntry;