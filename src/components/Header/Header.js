import React, {Component} from 'react';
import Search from "./Search/Search";
import ResponsiveIcon from "../RippleIcon/RippleIcon";
import {NavLink} from 'react-router-dom';
import {MdMenu, MdDashboard, MdContacts} from 'react-icons/md';
import {connect} from 'react-redux';
import {EXPAND_LEFT_SIDEBAR, COLLAPSE_LEFT_SIDEBAR} from "../../actions/layout";

import './Header.scss';

const mapStateToProps = (state) => {
    return {
        isCollapsedLeftSideBar: state.layout.isCollapsedLeftSideBar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        expandLeftSidebar: () => {
            dispatch({type: EXPAND_LEFT_SIDEBAR});
        },
        collapseLeftSidebar: () => {
            dispatch({type: COLLAPSE_LEFT_SIDEBAR});
        }
    }
};


class Header extends Component {

    toggleLefSideBar = () =>{
        if(this.props.isCollapsedLeftSideBar){
            this.props.expandLeftSidebar();
        }else{
            this.props.collapseLeftSidebar();
        }
    };

    render() {
        return (
            <header className="Header">
                <div className="Header__menu_toggle">
                    <ResponsiveIcon
                        size={38}
                        style={{margin: '3px'}}
                        onClick={() => this.toggleLefSideBar()}
                    >
                        <MdMenu/>
                    </ResponsiveIcon>
                </div>

                <div className="Header__logo">
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
                         alt="Gmail Logo"
                         className="Header__logo_image"
                    />
                </div>
                <div className="Header__search">
                    <Search/>
                </div>

                <div className="Header__tools">
                    <NavLink to="/mails">
                        <ResponsiveIcon size={38} style={{margin: '3px', padding: '7px'}}>
                            <MdDashboard/>
                        </ResponsiveIcon>
                    </NavLink>
                </div>

                <div className="Header__tools">
                    <NavLink to="/contacts">
                        <ResponsiveIcon size={38} style={{margin: '3px', padding: '7px'}}>
                            <MdContacts/>
                        </ResponsiveIcon>
                    </NavLink>
                </div>

            </header>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
