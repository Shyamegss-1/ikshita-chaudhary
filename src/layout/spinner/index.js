import React from 'react';
import { Spin } from 'antd';
import { Col, Row } from 'antd';

const Spinner = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col md={1} sm={1} xs={1} lg={1} xl={1} xxl={1} className="spinner">
          <Spin size="large" />
        </Col>
      </Row>
    </div>
  );
};

export default Spinner;
