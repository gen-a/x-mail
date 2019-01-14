import React, {Component} from 'react';

import Search from "./Search/Search";
import ResponsiveIcon from "../RippleIcon/RippleIcon";

import { MdMenu, MdAccountCircle } from 'react-icons/md';

import './Header.scss';

class Header extends Component {
    state = {};

    toggleMenuActiveStatus =() =>{
        this.props.setMenuActiveStatus(!this.props.menuToggleStatus);
    };

    render() {
        return (
            <header className="Header">
                <div className="Header__menu_toggle">
                    <ResponsiveIcon
                        size="38"
                        style={{margin:'3px'}}
                        onClick = {() => this.toggleMenuActiveStatus()}
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
                    <ResponsiveIcon size="38" style={{margin:'3px',padding:'7px'}}>
                        <MdAccountCircle/>
                    </ResponsiveIcon>
                </div>


            </header>
        );
    }
}

export default Header;
