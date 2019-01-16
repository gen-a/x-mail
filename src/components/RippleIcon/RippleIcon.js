import React, {Component} from 'react';
import {IconContext} from "react-icons";
import PropTypes from "prop-types";

import './RippleIcon.scss';

class ResponsiveIcon extends Component {
    // Set default props
    static defaultProps = {
        backgroundColor: "#e0e5f8",
        size: 32,
        iconSize:24,
        iconColor:'#616ea1',
        onClick:function(){}
    };
    static propTypes = {
        backgroundColor: PropTypes.string,
        size: PropTypes.number,
        iconSize: PropTypes.number,
        iconColor: PropTypes.string,
        onClick: PropTypes.func
    };
    state = {
        isActive: false
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
                 onClick={onClick}
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