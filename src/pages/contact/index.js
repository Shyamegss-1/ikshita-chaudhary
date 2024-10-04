import React from 'react';
import { Col, Row } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/route-path';
import Helpus from '../../components/helpUsComponent';

const Index = () => {
  return (
    <div>
      <Row className={'hide_banner'}>
        <Col span={30} style={{ zIndex: '-1', marginBottom: '20px' }}>
          <img
            src={
              'https://imgs.ogaanindia.com/homepage/2022/Ogaan/october/13-oct/mob/om-express-shipping-desktop-sticky-IND.jpg'
            }
          />
        </Col>
      </Row>

      <Row justify="center">
        <Col md={20} sm={16} xs={19} style={{ marginBottom: '15px' }} lg={19} xl={18} xxl={15}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={HOME}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>CONTACT US</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row justify="center">
        <Col className="helpus_hide" md={7} lg={5} xl={5} xxl={4}>
          <Helpus />
        </Col>
        <Col md={15} sm={16} xs={19} lg={14} xl={13} xxl={11}>
          <div className="ogaan-helpus-block">
            <div className="right-block">
              <div className="ogaan-content">
                <div className="data-block">
                  <div className="title">Sales Help</div>
                  <div className="description">
                    We’re always happy to answer any questions on size, fit, product details,
                    delivery, returns, and anything else. Please get in touch with us:
                    <br />
                    <br />
                    Call or Whatsapp us at +91-1141650033 (9 AM - 9 PM IST)
                    <br />
                    <br />
                    Email us at{' '}
                    <a href="mailto:Info@Ikshitachoudhary.Com">Info@Ikshitachoudhary.Com</a>
                  </div>
                </div>
                <div className="data-block">
                  <div className="title">Other Inquiries</div>
                  <div className="description">
                    Feedback &amp; Suggestions
                    <br />
                    <a href="mailto:saleshelp@ogaan.com?Subject=Feedback">saleshelp@ogaan.com</a>
                    <br />
                    <br />
                    Press &amp; Media
                    <br />
                    <a href="mailto:press@ogaan.com?Subject=Press">press@ogaan.com</a>
                    <br />
                    <br />
                    Suppliers &amp; Designers – for queries on stocking with us
                    <br />
                    <a href="mailto:contributors@ogaan.com?Subject=Designers">
                      contributors@ogaan.com
                    </a>
                    <br />
                    <br />
                    Potential Contributors – photographers, journalists, or fashion writers
                    <br />
                    <a href="mailto:contributors@ogaan.com?Subject=Contributors">
                      contributors@ogaan.com
                    </a>
                    <br />
                    <br />
                    Careers – to know more about job openings
                    <br />
                    <a>hr@ogaan.com</a>
                    <br />
                    <br />
                    Registered Address:
                    <br />
                    T/B-1, Gora St,
                    <br />
                    Shahpur Jat,
                    <br />
                    New Delhi, Delhi 110049
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
