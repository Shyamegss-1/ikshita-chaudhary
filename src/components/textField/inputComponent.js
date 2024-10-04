import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const TextField = ({ placeholder, id, name, type, disabled, defaultValue }) => {
    return (
        <Input
            style={{ padding: '5px' }}
            placeholder={placeholder || 'text field'}
            id={id || 'text field'}
            name={name || id || 'name'}
            type={type || 'text'}
            onChange={() => console.log('onChangeInput')}
            disabled={disabled || false}
            defaultValue={defaultValue || ''}
        />
    );
};

export default TextField;

TextField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    defaultValue: PropTypes.any
};
