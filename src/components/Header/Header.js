import React, {Component} from 'react';

import Search from "./Search/Search";
import ResponsiveIcon from "../RippleIcon/RippleIcon";
import {NavLink} from 'react-router-dom';
import {MdMenu, MdDashboard, MdContacts} from 'react-icons/md';
import PropTypes from "prop-types";


import './Header.scss';

class Header extends Component {

    static defaultProps = {};

    static propTypes = {
        toggleLeftSideBar: PropTypes.func.isRequired
    };

    state = {};

    render() {
        return (
            <header className="Header">
                <div className="Header__menu_toggle">
                    <ResponsiveIcon
                        size={38}
                        style={{margin: '3px'}}
                        onClick={this.props.toggleLeftSideBar}
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
                    <NavLink to="/">
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

export default Header;
