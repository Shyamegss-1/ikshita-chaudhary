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
            <Breadcrumb.Item>About us</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row justify="center" wrap>
        <Col className="helpus_hide" md={5} lg={5} xl={5} xxl={4}>
          <Helpus />
        </Col>
        <Col md={15} sm={25} xs={25} lg={14} xl={13} xxl={11}>
          <div className="ikesh-content">
            <Row gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify={'space-evenly'}>
              <Col md={15} sm={16} xs={19} lg={9} xl={10} xxl={11}>
                <div className="column">
                  <div className="img-pod">
                    <img src="https://img2.ogaanindia.com/pub/media/ogaanImages/about-ogaan-2.jpg" />
                  </div>
                  <div className="description-block">
                    <div className="text">
                      Ikshita Choudhary, even as a fashion student was inclined towards the
                      authentic traditional designs of our nation. To bring her imaginations and
                      visions to life, she started Ikshita Choudhary Label in December of 2015.
                      Under her keen guidance and leadership, Ikshita Choudhary Label has grown
                      significantly in the past years.
                      <br />
                      <br />
                      Our hard work and diligence to be better and more creative have left us with a
                      huge number of clients that are trusting of our process and have always been
                      elated by our products and designs. We draw inspiration from the diverse and
                      rich culture of our nation and try to bring the same vivid colors in our
                      clothing range.
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={15} sm={16} xs={19} lg={9} xl={10} xxl={11}>
                <div className="column">
                  <div className="img-pod">
                    <img src="https://img2.ogaanindia.com/pub/media/catalog/product/cache/61394fed4cca708a807c58fe70eac75d/f/s/fs23ks06b.jpg?v=1.3" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
