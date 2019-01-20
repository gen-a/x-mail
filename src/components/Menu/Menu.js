import React, {Component, Fragment} from 'react';
import RippleIcon from "../RippleIcon/RippleIcon";
import {MdAdd} from 'react-icons/md';
import MenuEntry from "./MenuEntry/MenuEntry";
import {connect} from 'react-redux';
import {OPEN_NEW_MAIL_WINDOW} from '../../actions/layout';

import "./Menu.scss";

const mapStateToProps = (state) => {
    return {
        folders: state.mails.mailFolders,
        mails: state.mails.mailList,
        isCollapsed:state.layout.isCollapsedLeftSideBar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openNewMailWindow: () => {
            dispatch({type: OPEN_NEW_MAIL_WINDOW});
        }
    }
};

class Menu extends Component {

    getUnreadQuantities=()=>{
        let result = {}, mails = this.props.mails;
        for(let p in mails){
            if(mails.hasOwnProperty(p)){
                if(mails[p].length){
                    result[p] = mails[p]
                        .map( value => value.isRead ? 0 : 1 )
                        .reduce( (value, currentValue) =>  currentValue + value, 0);
                }
            }
        }
        return result;
    };

    render() {
        let {activeList, isCollapsed, folders} = this.props;
        let unread = this.getUnreadQuantities();

        let renderFolders = folders.map((folder) => {
            return (
                <li className="Menu__entries_list_entry" key={folder.id}>
                    <MenuEntry
                        entry={folder}
                        isActive={folder.id === activeList}
                        number={unread[folder.id]}
                    />
                </li>
            );
        });

        let getClassName = () => {
            let className = "Menu__entries";
            if (isCollapsed) {
                className += " Menu__entries_is_collapsed";
            }
            return className;
        };

        return (<Fragment>

            <RippleIcon
                size={38}
                style={{margin: '3px'}}
                onClick={()=>this.props.openNewMailWindow()}
            >
                <MdAdd/>
            </RippleIcon>


            <ul className={getClassName()}>
                {renderFolders}
            </ul>
        </Fragment>);
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);