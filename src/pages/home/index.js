import { Col, Row } from 'antd';
import React from 'react';
import './style.css';
import SwiperSlider from './components/swiperSlide';
import categorieData from './data/categories.json';
import essintialData from './data/essintial.json';
import { SwiperSlide } from 'swiper/react';
import ProductSlider from './components/productSlider';
import sliderProdData from './data/sliderProdData';
import ButtomBlock from './components/buttomBlock';
import RowSpace from './components/row-space';

const Index = () => {
  return (
    <div className="home-container-main">
      <Row>
        <SwiperSlider />
      </Row>
      <Row
        className="product-categorie"
        gutter={[
          { xxl: 10, xl: 11, lg: 12, md: 13, sm: 14, xs: 11 },
          { xxl: 10, xl: 11, lg: 12, md: 13, sm: 14, xs: 11 }
        ]}
        justify="center">
        {categorieData.map((e) => (
          <Col key={e.id} xxl={7} xl={7} lg={9} md={9} sm={10} xs={11}>
            <div className="main-container">
              <div className="image-container">
                <img src={e.imgUrl} />
              </div>
              <div className="content">
                <div className="title">{e.ButtonTag}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <RowSpace />
      <Row justify="center">
        <Col span={15}>
          <div className="head">
            <div className="title">The Weekend Edit</div>
            <div className="sub-title">Our cosy essentials for the season</div>
          </div>
        </Col>
      </Row>
      <Row justify="space-between" className="essintail-container">
        {essintialData.map((e) => (
          <Col key={e.id} xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="img-con">
              <img src={e.imgUrl} />
            </div>
            <div>
              <div className="content">
                <div className="title">{e.title}</div>
                <div className="sub-title">{e.content}</div>
                <a href="#" className="shop-now">
                  shop now
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <RowSpace />
      <Row justify="center">
        <Col span={15}>
          <div className="head">
            <div className="title">A Festive Mood</div>
            <div className="sub-title">Joyful collections for every occasion</div>
          </div>
        </Col>
      </Row>
      <Row justify="center" className="slider-container">
        <Col xxl={22} xl={24} lg={23} md={24} sm={22} xs={22}>
          <ProductSlider tabs={4} xs={1} sm={1} md={2} xl={3}>
            {sliderProdData.map((e) => (
              <SwiperSlide key={e.id}>
                <Col xxl={24} xl={24} lg={23} md={24} sm={24} xs={24}>
                  <div>
                    <img
                      src={e.imgUrl}
                      height={560}
                      width={550}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="head">
                      <div className="title">{e.ButtonTag}</div>
                      <div className="text">Shemohe</div>
                    </div>
                    <a href="#" className="shop-now">
                      Shop Now
                    </a>
                  </div>
                </Col>
              </SwiperSlide>
            ))}
          </ProductSlider>
        </Col>
      </Row>
      <RowSpace />
      <Row justify="center">
        <Col span={15}>
          <div className="head">
            <div className="title">Special Editions</div>
            <div className="sub-title">Eclectic pieces you won’t find elsewhere</div>
          </div>
        </Col>
      </Row>
      <Row justify="space-between" className="essintail-container">
        {essintialData.map((e) => (
          <Col key={e.id} xxl={6} xl={6} lg={12} md={12} sm={12} xs={12}>
            <div className="img-con">
              <img src={e.imgUrl} />
            </div>
            <div>
              <div className="content">
                <div className="title">{e.title}</div>
                <div className="sub-title">{e.content}</div>
                <a href="#" className="shop-now">
                  shop now
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <RowSpace />
      <Row justify="center">
        <Col span={15}>
          <div className="head">
            <div className="title">Our Accessory Finds</div>
            <div className="sub-title">All the pieces you’ll need</div>
          </div>
        </Col>
      </Row>
      <Row justify="center" className="sec-slider">
        <Col xxl={22}>
          <ProductSlider tabs={5} xs={1} sm={2} md={4} xl={3}>
            {sliderProdData.map((e) => (
              <SwiperSlide key={e.id}>
                <Col xxl={24}>
                  <div>
                    <img src={e.imgUrl} />
                  </div>
                  <div className="content">
                    <a href="#" className="title">
                      {e.ButtonTag}
                    </a>
                    <a href="#" className="text">
                      Fine Fusion
                    </a>
                  </div>
                </Col>
              </SwiperSlide>
            ))}
          </ProductSlider>
        </Col>
      </Row>
      <RowSpace />
      <ButtomBlock />
    </div>
  );
};

export default Index;
