import { EyeOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_DETAILS } from '../../constants/route-path';
import PropTypes from 'prop-types';

const ProductCard = ({ img, setOpen }) => {
  return (
    <Card size={300} className="product-card product-section-shop">
      <div className="product-img">
        <div className="wish_list">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <Link to={PRODUCT_DETAILS}>
          <img src={img} />
        </Link>
        <div className="Quick-view" onClick={() => setOpen(true)}>
          quick view <EyeOutlined />
        </div>
      </div>

      <div className="product-info">
        <Link to={PRODUCT_DETAILS}>
          <h1>ROOHANIYAT</h1>
          <p className="text">Kota Doriya Suit Set</p>
          <p className="price">Rs. 3,800</p>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  img: PropTypes.any.isRequired,
  setOpen: PropTypes.func.isRequired
};
