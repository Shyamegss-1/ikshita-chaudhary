import React from 'react';
import { Col, Row } from 'antd';
import './style.css';
import WishlistCard from './components/product-card';

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
      <Row justify="center" wrap>
        <Col md={20} sm={20} xs={23} lg={14} xl={13} xxl={15}>
          <div className="wishlist_main">
            <div className="title">MY WISHLIST</div>
            {[1, 2, 3].map((e) => (
              <WishlistCard key={e} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
