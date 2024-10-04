import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './style.css';
import moduleName from '../../images/logo_dark.png';
import {
  LoadingOutlined,
  HomeTwoTone,
  UserOutlined,
  SecurityScanOutlined
} from '@ant-design/icons';
import { Col, Row, Steps } from 'antd';
import ProductList from './components/productList';
import Summary from './components/summary';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/route-path';
import AddressBlock from './components/addressBlock';

const Index = () => {
  const [state, setstate] = useState(true);

  useEffect(() => {
    $('.order-txt').on('click', function () {
      setstate(!state);
    });
  }, [state]);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="logo">
          <Link to={HOME}>
            <img src={moduleName} />
          </Link>
        </div>
        <div className="navigation">
          <Steps
            items={[
              {
                title: 'Cart',
                status: 'process',
                icon: <UserOutlined />
              },
              {
                title: 'Address',
                status: 'process',
                icon: <HomeTwoTone />
              },
              {
                title: 'Payment',
                status: 'process',
                icon: <LoadingOutlined />
              }
            ]}
          />
        </div>
        <div className="secure-logo">
          <span>
            <SecurityScanOutlined style={{ color: 'green', fontSize: '25px' }} />
          </span>
          <p> 100% SECURE</p>
        </div>
      </div>
      <div className="message">Prices are inclusive of all taxes</div>
      <Row justify="center">
        <Col xxl={8} xl={9} lg={12} md={20} sm={20} xs={23} className={'product-listing'}>
          {state ? <ProductList /> : <AddressBlock />}
        </Col>
        <Col
          xxl={4}
          xl={5}
          lg={8}
          md={20}
          sm={20}
          xs={22}
          id="orderSummaryNext"
          className={'order-summary'}>
          <Summary />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
