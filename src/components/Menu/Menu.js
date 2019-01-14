import React, {Component, Fragment} from 'react';

import RippleIcon from "../RippleIcon/RippleIcon";

import {MdAdd} from 'react-icons/md';


import MenuEntry from "./MenuEntry/MenuEntry";
import "./Menu.scss";

class Menu extends Component {
    state = {
        folders: [
            {
                status: true,
                name: "Inbox",
                id: "inbox",
                number:33
            },

            {
                status: true,
                name: "Outbox",
                id: "outbox",
                number:33
            }
        ]
    };

    changeActiveList = (id) => {
        this.props.changeActiveList(id);
    };
    openNewMessageWindow = () =>{
        this.props.openNewMessageWindow();
    };

    render() {
        let renderFolders = this.state.folders.map((folder) => {
            return (
                <li className="Menu__entries_list_entry" key={folder.id}>
                    <MenuEntry
                        entry = {folder}
                        isActive = {folder.id === this.props.active}
                        number = { this.props.mailList[folder.id].length}
                        changeActiveList = {this.changeActiveList}
                    />
                </li>
            );
        });

        let getClassName = () => {
            let className = "Menu__entries_list";
            if(this.props.isActive){
                className += " Menu__entries_list_is_active";
            }
            return className;
        };

        return (<Fragment>

            <RippleIcon
                size="38"
                style={{margin: '3px'}}
                onClick={() => this.openNewMessageWindow()}
            >
                <MdAdd/>
            </RippleIcon>


            <ul className={getClassName()}>
                {renderFolders}
            </ul>
        </Fragment>);
    }

}

export default Menu;