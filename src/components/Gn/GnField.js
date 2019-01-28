import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {MdError, MdArrowBack} from 'react-icons/md'
import {IconContext} from 'react-icons'

import './GnField.scss'

function GnField({id, label, children, error, active, required}) {

    let className = 'GnField', iconColor, icon;
    if (active) {
        className += ' GnField_active';
        iconColor = 'orange';
        icon = <MdArrowBack/>;
    } else {
        if (error) {
            className += ' GnField_failed';
            iconColor = 'red';
            icon = <MdError/>;
        }
    }
    if (required) {
        className += ' GnField_required';
    }

    return (
        <Fragment>
            <div className={className}>
                <div className="GnField__label">
                    <label htmlFor={id}>{label}</label>
                </div>
                <div className="GnField__input">
                    {children}
                    {error && <div className="GnField__error_message">{error}</div>}
                </div>
                <div className="GnField__icon">
                    <IconContext.Provider value={{size: 24, color: iconColor}}>
                        <div style={{margin: "4px"}}>
                            {icon}
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </Fragment>
    );
}

GnField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    error: PropTypes.string,
    active: PropTypes.bool,
    required: PropTypes.bool
};

GnField.defaultProps = {
    error: '',
    active: false,
    required: false
};

export default GnField;