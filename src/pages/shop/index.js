import React, { useState } from 'react';
import './style.css';
import { Col, Row, Select } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/route-path';
import FilterComponent from '../../components/filterComponent';
import ProductCard from '../../components/productCard/product-card';
import Productmodal from '../../components/productModal/productmodal';
import MobileFilterMenu from '../../components/mobile-filter';
const { Option } = Select;

const Index = () => {
  const [open, setOpen] = useState(false);

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
            <Breadcrumb.Item>Shop</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row style={{ margin: '10px 10px' }} justify="center" className="hide-filters">
        <Col xxl={4} xl={5} lg={5} md={8}>
          <div className="filter-header">FILTERS</div>
        </Col>
        <Col xxl={12} xl={13} lg={12} md={14}>
          <Select placeholder="Sort By" defaultValue="sort-by" style={{ width: 220 }} allowClear>
            <Option value="sort-by">Default</Option>
            <Option value="plth">Price Low To High</Option>
            <Option value="phtl">Price High TO Low</Option>
            <Option value="popularity">Popularity</Option>
            <Option value="discount"> Discount</Option>
            <Option value="arrival">New Arrival</Option>
          </Select>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="helpus_hide" md={6} lg={5} xl={5} xxl={4}>
          <FilterComponent />
        </Col>
        <Col md={16} sm={20} xs={20} lg={12} xl={13} xxl={12}>
          <Row justify="space-between" gutter={[10, 15]}>
            {[1, 2, 3, 4, 5, 6].map((e) => {
              return (
                <Col key={e + e - 1 * 0} md={12} sm={12} xs={24} lg={12} xl={8} xxl={8}>
                  <ProductCard
                    setOpen={setOpen}
                    img={
                      'https://ikshitachoudhary.com/cdn/shop/files/Artboard17Mireya_1.jpg?v=1685507957&width=720'
                    }
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <Productmodal setOpen={setOpen} open={open} />
      <MobileFilterMenu />
    </div>
  );
};

export default Index;
