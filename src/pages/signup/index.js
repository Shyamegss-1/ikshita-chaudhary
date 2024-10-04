import React from 'react';
import { Form, Button, Input, Col, Row } from 'antd';
import './style.css';
import TextField from '../../components/textField/inputComponent';
import { GoogleOutlined } from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 24
    }
};

const FormData = [
    {
        id: 1,
        lable: 'Full Name',
        required: true,
        name_id: 'fullName',
        inputType: 'text',
        placeholder: ' Full Name',
        disabled: false
    },
    {
        id: 2,
        lable: 'Email',
        required: true,
        name_id: 'email',
        inputType: 'text',
        placeholder: ' Email',
        disabled: false
    },
    {
        id: 3,
        lable: 'Password',
        required: true,
        name_id: 'password',
        inputType: 'text',
        placeholder: 'Password',
        disabled: false
    },
    {
        id: 4,
        lable: 'Confirm Password',
        required: true,
        name_id: 'confirmPassword',
        inputType: 'text',
        placeholder: ' Confirm Password',
        disabled: false
    }
];

const Index = () => {
    const [form] = Form.useForm();
    return (
        <div className="signup-form">
            <Row justify="center" style={{ marginTop: '50px' }}>
                <Col span={9} className="sign-up-form">
                    <div className="header">CREATE YOUR ACCOUNT</div>
                    <div className="content">
                        <div className="title">Join Us</div>
                        <div className="text">
              Set up an OGAAN account to enjoy priority checkouts and insider access to our new
              launches
                        </div>
                    </div>
                    <Form {...layout} form={form} name="control-hooks" layout="vertical">
                        {FormData.map((input) => (
                            <Form.Item
                                key={input.id}
                                name={input.placeholder}
                                label={input.lable}
                                rules={[
                                    {
                                        required: input.required
                                    }
                                ]}
                            >
                                <Input
                                    placeholder={input.placeholder}
                                    id={input.name_id}
                                    name={input.name_id}
                                    type={input.inputType}
                                    disabled={input.disabled}
                                />
                            </Form.Item>
                        ))}
                        <Button type="primary" style={{ background: 'black' }} size={'large'} htmlType="submit">
              Submit
                        </Button>
                    </Form>
                </Col>
                <Col span={8} className="login-up-form">
                    <div className="header">LOGIN YOUR ACCOUNT</div>
                    <div className="content">
                        <div className="title">Registered Customers</div>
                        <div className="text">If you have an account with us, please log in.</div>
                    </div>
                    <div className="login-modal">
                        <Row>
                            <Col className="header-block" span={22}>
                                <div className="title">Sign in to</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={24}>
                                <div className="social-block">
                                    <div className="title">Sign in without a password</div>
                                    <div className="social-signin">
                                        <div className="facebook-signIn">
                                            <i className="fa fa-facebook" aria-hidden="true"></i> facebook
                                        </div>
                                        <div className="goole-signin">
                                            <GoogleOutlined style={{ color: '#ffff' }} />
                      &nbsp;google
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="dif">
                                <h1>OR</h1>
                            </Col>
                        </Row>
                        <Row justify="center" gutter={[10, 15]}>
                            <Col span={22}>
                                <TextField
                                    placeholder={'Email'}
                                    id={'email'}
                                    name={'email'}
                                    type={'text'}
                                    disabled={false}
                                    defaultValue={''}
                                />
                            </Col>
                            <Col span={22}>
                                <TextField
                                    placeholder={'password'}
                                    id={'password'}
                                    name={'password'}
                                    type={'text'}
                                    disabled={false}
                                    defaultValue={''}
                                />
                            </Col>
                            <Col span={22}>
                                <button className="btn-login">SIGN IN</button>
                            </Col>
                        </Row>
                        <Row justify="center" className="new-useer">
                            <Col span={22} flex={'space-between'}>
                                <div className="forgotPassword same-click">forgot password ?</div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Index;
