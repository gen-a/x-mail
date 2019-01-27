import React from 'react'
import PropTypes from 'prop-types'

import './GnMessage.scss'

function GnMessage({message, type}) {

    let className = 'GnMessage';
    switch (type) {
        case 'error':
            className += ' GnMessage_error';
            break;
        case 'info':
            className += ' GnMessage_info';
            break;
        case 'success':
            className += ' GnMessage_success';
            break;
        default:
    }

    return (
        <div className={className}>
            {message}
        </div>
    );
}

GnMessage.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['error', 'info', 'success'])
};

GnMessage.defaultProps = {
    message: '',
    type: 'error'
};

export default GnMessage;