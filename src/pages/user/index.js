import React from 'react';
import { Col, Row } from 'antd';
import { BILLING_ADDRESS, SHIPPING_ADDRESS, USER_ORDER } from '../../constants/route-path';
import './style.css';
import { Link } from 'react-router-dom';
import AccountNavigation from './components/accountNavigation';

const Index = () => {
  return (
    <div>
      <Row className={'hide_banner'}>
        <Col span={30} style={{ zIndex: '-1', marginBottom: '20px' }}>
          <img
            src={
              'https://imgs.ogaanindia.com/homepage/2022/Market/october/20-oct/mob/new/om-festive-collection-desktop-sticky-IND.jpg'
            }
          />
        </Col>
      </Row>

      <Row justify="center" wrap>
        <Col className="helpus_hide Account-navigation" md={5} lg={5} xl={5} xxl={4}>
          <AccountNavigation active={'Account Dashboard'} />
        </Col>
        <Col md={15} sm={20} xs={23} lg={14} xl={13} xxl={11} className="Account-info">
          <div className="right-block">
            <div className="ogaan-content">
              <div className="data-block">
                <h2 className="title">Hello, Sahil Egss!</h2>
                <div className="sub-text">
                  From your My Account Dashboard you have the ability to view a snapshot of your
                  recent account activity and update your account information. Select a link below
                  to view or edit information.
                </div>
              </div>

              <div className="contact-block">
                <div className="contact-content">
                  <div className="heading">
                    <div className="head">CONTACT INFORMATION</div>
                    <Link to={'#'} className="edit-text">
                      Edit
                    </Link>
                  </div>
                  <div className="content">
                    <div className="contact-text">Sahil Egss </div>
                    <div className="contact-email">sahilegss@gmail.com</div>
                  </div>
                </div>
                <div className="contact-content">
                  <div className="heading">
                    <div className="head">NEWSLETTERS</div>
                    <Link to="#" className="edit-text">
                      Edit
                    </Link>
                  </div>
                  <div className="content">
                    <div className="contact-text">
                      You are currently not subscribed to any newsletter.
                    </div>
                    <div className="manage-address">
                      <div className="text">Address Book</div>
                      <Link to="#" className="manage-text">
                        Manage Addresses
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="contact-content">
                  <div className="heading">
                    <div className="head">DEFAULT BILLING ADDRESS</div>
                    <Link to={BILLING_ADDRESS} className="edit-text">
                      Edit Address
                    </Link>
                  </div>
                  <div className="content">
                    <div className="set-billing-text">
                      You have not set a default billing address.
                    </div>
                  </div>
                </div>
                <div className="contact-content">
                  <div className="heading">
                    <div className="head">DEFAULT SHIPPING ADDRESS</div>
                    <Link to={SHIPPING_ADDRESS} className="edit-text">
                      Edit Address
                    </Link>
                  </div>
                  <div className="content">
                    <div className="set-billing-text">
                      You have not set a default shipping address.
                    </div>
                  </div>
                </div>
                <div className="contact-content for-order">
                  <div className="heading">
                    <div className="head">My orders</div>
                    <Link to={USER_ORDER} className="edit-text">
                      View Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
