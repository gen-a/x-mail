import React, {Component, Fragment} from 'react';
import { MdInbox,MdSend } from 'react-icons/md';
import { IconContext } from "react-icons";
import './MenuEntry.scss';






class MenuEntry extends Component {

    changeActiveList = (id) => {
        this.props.changeActiveList(id);
    };

    getEntryIcon(id){
        switch(id){
            case 'inbox':
                return <MdInbox/>;
            case 'outbox':
                return <MdSend/>   ;
            default:
                 return <MdInbox/>;
        }
    };


    render() {
        let className = this.props.isActive ? "MenuEntry MenuEntry_is_active" : "MenuEntry";
        return (
            <Fragment>
                <div className={className}>
                    <div onClick={() => this.changeActiveList(this.props.entry.id)}>
                        <IconContext.Provider value={{ className: "MenuEntry__icon" }}>
                        <div className="MenuEntry__icon_container">
                            {this.getEntryIcon(this.props.entry.id)}
                        </div>
                    </IconContext.Provider>
                        <div className="MenuEntry__name">
                            {this.props.entry.name}
                        </div>
                        <div className="MenuEntry__number">
                            {this.props.number}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MenuEntry;