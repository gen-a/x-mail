import React from 'react'
import PropTypes from 'prop-types'
import GnField from './GnField'

let counter = 0;

function GnTextarea({input, placeholder, meta, label, required}) {
    counter++;
    let id = 'textarea_' + counter;
    return (
        <GnField required={required} error={meta.touched && meta.error} active={meta.active} label={label} id={id}>
            <textarea {...input} id={id} placeholder={placeholder}/>
        </GnField>
    );
}

GnTextarea.propTypes = {
    input:PropTypes.object.isRequired,
    placeholder:PropTypes.string,
    meta:PropTypes.object.isRequired,
    label:PropTypes.string.isRequired,
    required: PropTypes.bool
};

GnTextarea.defaultProps = {
    placeholder: '',
    required: false
};

export default GnTextarea;