import { Col, Row } from 'antd';
import React from 'react';

const RowSpace = () => {
    return (
        <Row justify="center" className="divider-img">
            <Col xxl={10} xl={12} lg={15} md={14} sm={16} xs={17}>
                <img src="https://www.ogaanmarket.com/pub/media/ogaanImages/market/border-img-2.svg" />
            </Col>
        </Row>
    );
};

export default RowSpace;
