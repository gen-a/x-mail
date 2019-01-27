import React from 'react'
import PropTypes from 'prop-types'
import GnField from './GnField'

let counter = 0;

function GnInput({input, type, placeholder, meta, label, required}) {
    counter++;
    let id = 'input_' + counter;

    return (
        <GnField
            id={id}
            required={required}
            error={meta.touched && meta.error}
            active={meta.active}
            label={label}
        >
            <input id={id} {...input} type={type} placeholder={placeholder}/>
        </GnField>
    );
}

GnInput.propTypes = {
    input:PropTypes.object.isRequired,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    meta:PropTypes.object.isRequired,
    label:PropTypes.string.isRequired,
    required: PropTypes.bool
};

GnInput.defaultProps = {
    placeholder: '',
    required: false
};

export default GnInput;