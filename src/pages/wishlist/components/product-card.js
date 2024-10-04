import React from 'react';
import { Col, Row } from 'antd';

const WishlistCard = () => {
  return (
    <div className="modal">
      <Row justify="space-between">
        <Col xxl={4} md={8} sm={8} xs={7}>
          <div className="img-continer">
            <img src="https://img2.ogaanindia.com/pub/media/catalog/product/cache/86c59fd1593a25cbc7b3ff7686aec236/n/v/nvpuset31.jpg" />
          </div>
        </Col>
        <Col xxl={20} md={16} sm={14} xs={16}>
          <Row justify="space-between">
            <Col className="product-details">
              <h3>IKSHITA CHOUDHARY</h3>
              <p>Chanderi Silk Embroidery Kurta With Pants And Dupatta</p>
            </Col>
            <Col className="product-price">RS.&nbsp;123454</Col>
          </Row>
          <Row>
            <Col className="product-size" xxl={5} md={10} sm={20} xs={24}>
              <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
                  <li key={el + 1 / 1}>XK{el}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row justify="space-between" className="wish-list-btns">
            <Col>
              <button className="btn-add-cart"> + ADD TO BAG</button>
            </Col>
            <Col>
              <h2 className="btn-remove">REMOVE</h2>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WishlistCard;
