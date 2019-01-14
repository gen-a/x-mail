import React, {Component, Fragment} from 'react';

import RippleIcon from "../RippleIcon/RippleIcon";

import {MdClear} from 'react-icons/md';

import './ModalWindow.scss';


class ModalWindow extends Component {

    render() {
        const {isOpen, children, title, onClose} = this.props;
        let className = "ModalWindow";
        if (isOpen) {
            className = "ModalWindow";
            if (isOpen) {
                className += " ModalWindow_is_active";
            }
        }
        return (
            <Fragment>
                <div className={className}>
                    <div className="ModalWindow__underlay"/>
                    <div className="ModalWindow__window">
                        <div className="ModalWindow__header">
                            <div className="ModalWindow__header_name">
                                {title}
                            </div>
                            <div className="ModalWindow__header_close_tool">
                                <RippleIcon
                                    size="38"
                                    style={{margin: '3px'}}
                                    onClick={onClose}
                                >
                                    <MdClear/>
                                </RippleIcon>
                            </div>
                        </div>
                        <div className="ModalWindow__body">
                            {children}
                        </div>
                    </div>
                </div>
            </Fragment>


        );
    }
}

export default ModalWindow;