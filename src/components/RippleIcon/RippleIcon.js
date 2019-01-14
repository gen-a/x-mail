import React, {Component} from 'react';
import {IconContext} from "react-icons";

import './RippleIcon.scss';


class ResponsiveIcon extends Component {
    state = {
        isActive: false
    };
    // Set default props
    static defaultProps = {
        backgroundColor: "#e0e5f8",
        size: 32,
        iconSize:24,
        iconColor:'#616ea1'
    };

    onMouseOver = () => {
        this.setState({isActive: true});
    };
    onMouseOut = () => {
        this.setState({isActive: false, isClicked:false});
    };

    getIfClass = (baseClass, additionalClass, condition) =>{
        if(condition){
            baseClass += " "+additionalClass;
        }
        return baseClass;
    };

    onClick= () => {
        this.props.onClick();
    };



    getBackgroundStyle = () => {
        const {backgroundColor, size} = this.props;

        let style = {
            backgroundColor: backgroundColor,
        };
        if (this.state.isActive) {
            style.width = size + 'px';
            style.height = size + 'px';
        } else {
            style.width = '0px';
            style.height = '0px';
        }
        return style;
    };
    getIconStyle = () => {
        const {iconColor, iconSize} = this.props;
        return {
            color: iconColor,
            size: iconSize + 'px'
        };
    };
    render() {
        const {onClick, children, style, size} = this.props;
        const containerStyle = {
            ...style,
            width: size + 'px',
            height: size + 'px'
        };
        const iconContextProviderValue= this.getIconStyle();
        iconContextProviderValue.className= "RippleIcon__icon";

        return (
            <div className={this.getIfClass(
                "RippleIcon",
                "RippleIcon_is_active",
                this.state.isActive)
            }
                 onMouseOver={() => this.onMouseOver()}
                 onMouseOut={() => this.onMouseOut()}
                 onClick={() => this.onClick()}
                 style={containerStyle}
            >
                <IconContext.Provider value={iconContextProviderValue}>
                    <div className="RippleIcon__icon_container">
                        {children}
                    </div>
                </IconContext.Provider>
                <div
                    className="RippleIcon__background"
                    style={this.getBackgroundStyle()}
                />
            </div>
        );
    };


}


export default ResponsiveIcon;