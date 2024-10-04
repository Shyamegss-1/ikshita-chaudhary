import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';

const PasswordField = () => {
    return (
        <Input.Password
            placeholder="password"
            id="id"
            name="name"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
    );
};

export default PasswordField;
