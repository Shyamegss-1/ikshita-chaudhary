import React from 'react';
import { Col, Row } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/route-path';
import './style.css';
import { HeartOutlined } from '@ant-design/icons';
import ProductImg from '../collection/components/product-img';
import BtnAddtoCart from './components/btn-AddtoCart';
import BtnWishlist from './components/btn-wishlist';
import YouMayAlso from './components/youMayAlso';

const Index = () => {
    return (
        <div>
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
                            <Breadcrumb.Item>Details</Breadcrumb.Item>
                            <Breadcrumb.Item>product cate</Breadcrumb.Item>
                            <Breadcrumb.Item>prodcut descrip</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row justify="center" wrap>
                    <Col className="helpus_hide" md={5} lg={5} xl={5} xxl={6}>
                        <ProductImg />
                    </Col>
                    <Col md={15} sm={25} xs={25} lg={14} xl={13} xxl={9} style={{ paddingLeft: '15px' }}>
                        <div className="product-description-section">
                            <div className="sub-title">Pearl Dejhoor Earrings</div>
                            <div className="price-text pricehtml custompricediv">Rs. 1,950</div>
                            <div className="size-block">
                                <div className="view-size" style={{ margin: 0, pointerEvents: 'none' }}>
                                    <div className="text">Free Size</div>
                                </div>
                                <div className="availability-block">
                                    <div className="product-availability">
                                        <div className="text">
                      For help with sizes, delivery times or anything else, reach us on
                                            <a className="reach--us" target="_blank" href="#">
                        at +918920441016
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-description">
                                <div className="head">SHIPPED IN</div>
                                <div className="contents shipsin_container">
                                    <div className="product-text">Product will be shipped by 04th November 2022</div>
                                    <input type="hidden" id="rts_date" value="29th October 2022" />{' '}
                                </div>
                            </div>

                            <div className="select-product">
                                <BtnWishlist icon={<HeartOutlined />} />
                                <BtnAddtoCart />
                            </div>
                            <div className="product-data">
                                <div className="product-description">
                                    <div className="head">Description</div>
                                    <div className="contents">
                                        <div className="product-text">
                                            <ul>
                                                <li>
                          Finely cut mirror set in casting metal plated with gold color along with
                          cotton thread
                                                </li>
                                                <li>Length- 29cm</li>
                                                <li>Weight-25gm</li>
                                                <li>Handcrafted Jewelry</li>
                                            </ul>{' '}
                                        </div>
                                    </div>
                                </div>

                                <div className="product-description">
                                    <div className="head ">CARE</div>
                                    <div className="contents ">
                                        <div className="product-text">
                      Keep away from moisture and water. When not wearing keep in plastic pouches.
                                        </div>
                                    </div>
                                </div>
                                <div className="product-description">
                                    <div className="head">AVAILABILITY</div>
                                    <div className="contents">
                                        <div className="product-text availtxt">MADE TO ORDER</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <YouMayAlso />
            </div>
        </div>
    );
};

export default Index;
