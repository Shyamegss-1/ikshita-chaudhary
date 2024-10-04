import React from 'react';
import BtnWishlist from '../../pages/collection/components/btn-wishlist';
import BtnAddtoCart from '../../pages/collection/components/btn-AddtoCart';
import ProductData from '../../pages/collection/components/collapse';
import ProductImg from '../../pages/collection/components/product-img';
import { Col, Row, Modal } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const Productmodal = ({ setOpen, open }) => {
  return (
    <Modal centered open={open} footer={false} onCancel={() => setOpen(false)} width={1400}>
      <Row justify="space-between">
        <Col span={9}>
          <ProductImg />
        </Col>
        <Col span={14}>
          <div>
            <div
              className="product-info"
              style={{ borderBottom: '1px solid #a5a5a5a5', paddingBottom: '10px' }}>
              <h1>ROOHANIYAT</h1>
              <p className="text">Kota Doriya Suit Set</p>
              <p className="price">Rs. 3,800</p>
            </div>
            <div className="product-size">
              <li>XL</li>
              <li>XXL</li>
              <li>M</li>
              <li>SM</li>
              <li>M</li>
              <li>XS</li>
            </div>
            <div className="select-product">
              <BtnWishlist icon={<HeartOutlined />} />
              <BtnAddtoCart />
            </div>
            <div className="more-queries">
              <span>MORE QUERIES ?</span> Reach us on at +3123123123
            </div>
            <div className="productData">
              <ProductData />
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default Productmodal;

Productmodal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
