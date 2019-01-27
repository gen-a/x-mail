import React from 'react'
import PropTypes from 'prop-types'

import './GnButton.scss'

function GnButton({input, type, label, disabled, action}) {
    return (
            <div className="GnButton">
                <button {...input} onClick={action} disabled={disabled} type={type}>
                    {label}
                </button>
            </div>
    );
}

GnButton.propTypes = {
    input:PropTypes.object.isRequired,
    type:PropTypes.oneOf(['submit', 'reset']),
    label:PropTypes.string.isRequired,
    disabled:PropTypes.bool,
    action:PropTypes.func,
};

GnButton.defaultProps = {
    type: 'submit',
    disabled: false
};

export default GnButton;