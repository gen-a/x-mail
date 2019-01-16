import React, {Component, Fragment} from 'react';
import RippleIcon from "../RippleIcon/RippleIcon";

import {MdAdd} from 'react-icons/md';


import MenuEntry from "./MenuEntry/MenuEntry";
import "./Menu.scss";

class Menu extends Component {
    // Set default props
    static defaultProps = {
        listLengths: {inbox: 0, outbox: 0},
        activeList: 'inbox',
        isExpanded: false
    };

    state = {
        folders: [
            {
                status: true,
                name: "Inbox",
                id: "inbox"
            },
            {
                status: true,
                name: "Outbox",
                id: "outbox"
            }
        ]
    };


    render() {
        let {listLengths, activeList, isExpanded, changeActiveList, openNewMessageWindow} = this.props;

        let renderFolders = this.state.folders.map((folder) => {
            return (
                <li className="Menu__entries_list_entry" key={folder.id}>
                    <MenuEntry
                        entry={folder}
                        isActive={folder.id === activeList}
                        number={listLengths[folder.id]}
                        changeActiveList={changeActiveList}
                    />
                </li>
            );
        });

        let getClassName = () => {
            let className = "Menu__entries_list";
            if (isExpanded) {
                className += " Menu__entries_list_is_active";
            }
            return className;
        };

        return (<Fragment>

            <RippleIcon
                size={38}
                style={{margin: '3px'}}
                onClick={openNewMessageWindow}
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