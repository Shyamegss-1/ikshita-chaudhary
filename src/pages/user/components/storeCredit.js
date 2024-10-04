import React from 'react';
import { Col, Row } from 'antd';
import '../style.css';
import AccountNavigation from './accountNavigation';
import { BackwardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const StoreCredit = () => {
    return (
        <div>
            <Row>
                <Col span={30} style={{ zIndex: '-1', marginBottom: '20px' }}>
                    <img
                        src={
                            'https://imgs.ogaanindia.com/homepage/2022/Market/october/20-oct/mob/new/om-festive-collection-desktop-sticky-IND.jpg'
                        }
                    />
                </Col>
            </Row>

            <Row justify="center" wrap>
                <Col className="helpus_hide Account-navigation" md={5} lg={5} xl={5} xxl={4}>
                    <AccountNavigation active={'Store Credit'} />
                </Col>
                <Col md={15} sm={25} xs={25} lg={14} xl={13} xxl={11} className="user-order">
                    <div className="right-block">
                        <div className="ogaan-content">
                            <div className="data-block">
                                <h2 className="title">Store Credit</h2>
                            </div>

                            <div className="order-block">
                                <div className="order-content">
                  You have no store credit transaction.
                                    <div className="edit-buttons">
                                        <div className="buttons">
                                            <BackwardOutlined
                                                style={{ fontSize: '20px', marginRight: '2px', paddingTop: '3px' }}
                                            />
                                            <Link to={'/customer/account'} className="back-to-account">
                        Back
                                            </Link>
                                        </div>
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

export default StoreCredit;
