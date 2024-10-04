import React from 'react';
import { Col, Modal, Row } from 'antd';
import PropTypes from 'prop-types';
// import { GoogleOutlined } from '@ant-design/icons';
import TextField from '../../../components/textField/inputComponent';
import moduleName from '../../../images/logo_dark.png';
import { Link } from 'react-router-dom';
import { SIGN_UP } from '../../../constants/route-path';
import Google from '../../../components/OAuthLogin/google';
import Facebook from '../../../components/OAuthLogin/facebook';

const Loginmodal = ({ setOpen, open }) => {
  return (
    <Modal
      centered
      open={open}
      footer={false}
      onCancel={() => setOpen(false)}
      width={500}
      className="login-modal">
      <Row>
        <Col className="header-block" span={22}>
          <div className="title">Sign in to</div>
          <div className="access-logo">
            <img src={moduleName} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xxl={24}>
          <div className="social-block">
            <div className="title">Sign in without a password</div>
            <div className="social-signin">
              <div>
                <Facebook />
              </div>
              <div>
                <Google />
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
          <Link to={SIGN_UP}>
            <div onClick={() => setOpen(false)} className="newUser same-click">
              new user?sign up
            </div>
          </Link>
        </Col>
      </Row>
    </Modal>
  );
};

export default Loginmodal;

Loginmodal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
