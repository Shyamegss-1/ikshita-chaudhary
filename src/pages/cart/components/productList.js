import React from 'react';
import { BookOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { WISHLIST } from '../../../constants/route-path';
import { Select } from 'antd';

const ProductList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="cart-block">
        <div className="item-head">
          <div className="head">
            My Shopping Bag <span>(1 Item)</span>
          </div>
          <div className="total-price">
            Total: <span className="head-total-price">Rs. 4,550</span>
          </div>
        </div>

        {[1, 2].map((e) => (
          <div key={e} className="cart-content">
            <div className="cart-item ">
              <div className="cart-detail-col">
                <a href="#" className="product-pod">
                  <img
                    src="https://ikshitachoudhary.com/upload/brand/634025066d742_the-vintage-set.webp"
                    alt="MARKKAH STUDIO Indigo Cape Dress (With Bird Motifs)"
                  />
                </a>
                <div className="prod-detail-block">
                  <div className="prod-info">
                    <div className="title">MARKKAH STUDIO </div>

                    <a href="#" className="sub-title">
                      Indigo Cape Dress (With Bird Motifs){' '}
                    </a>
                    <div className="size-qty-section">
                      <Select defaultValue={'xxl'}>
                        <Select.Option value={'xxl'}>XXL</Select.Option>
                      </Select>
                    </div>
                  </div>
                  <div className="prod-data">
                    <div className="price-section">
                      <div className="prod-prizes">
                        <div className="og-price">Rs. 4,550</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="access">
                <div className="text-remove">REMOVE</div>
                <div className="wish-text wish-btn abscent">Move to wishlist </div>
              </div>
            </div>
          </div>
        ))}
        <div className="add-wish-block" onClick={() => navigate(WISHLIST)}>
          <div className="wish-content">
            <div className="img-pod">
              <BookOutlined />
            </div>
            <div className="wish-text">Add More From Wishlist</div>
            <RightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
