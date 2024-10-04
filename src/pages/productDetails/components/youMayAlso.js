import React from 'react';
import { Card, Col, Row } from 'antd';

const YouMayAlso = () => {
    return (
        <div className="you-may-also">
            <Row justify="center">
                <Col span={15}>
                    <h2 className="heading">YOU MAY ALSO LIKE</h2>
                    <Row gutter={[100, 15]}>
                        {[1, 2, 3, 4, 5, 6].map((e) => {
                            return (
                                <Col span={4} key={e + e + 'daasdas'}>
                                    <Card
                                        hoverable
                                        style={{
                                            width: 200
                                        }}
                                    >
                                        <div className="product-img">
                                            <img src="https://ikshitachoudhary.com/storage/products/oxMUaJw9imcWLTTANkgPHXiM3.png" />
                                        </div>

                                        <div className="product-info">
                                            <h1>ROOHANIYAT</h1>
                                            <p className="text">Kota Doriya Suit Set</p>
                                            <p className="price">Rs. 3,800</p>
                                        </div>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default YouMayAlso;
