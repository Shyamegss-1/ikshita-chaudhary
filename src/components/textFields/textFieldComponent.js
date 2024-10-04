import React from 'react';
import { Input } from 'antd';

const TextArea = () => {
    return (
        <Input.TextArea
            id="id"
            name="name"
            autoSize={{ minRows: 3, maxRows: 5 }}
            placeholder="message"
        />
    );
};

export default TextArea;
