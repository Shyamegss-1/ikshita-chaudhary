import { Col, Row } from 'antd';
import React from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

const ProductImg = () => {
    return (
        <Row justify="space-between">
            <Col span={5}>
                <div className="img-product img-1">
                    <img src="https://img2.ogaanindia.com/pub/media/catalog/product/cache/221571f1f430d40317d9c45922ff3e32/n/1/n1795gold_1.jpg" />
                </div>
                <div className="img-product img-1">
                    <img src="https://img2.ogaanindia.com/pub/media/catalog/product/cache/221571f1f430d40317d9c45922ff3e32/n/1/n1795gold_1.jpg" />
                </div>
            </Col>
            <Col span={18}>
                <div id="container">
                    <InnerImageZoom
                        zoomType={'hover'}
                        zoomScale={0.7}
                        src="https://img2.ogaanindia.com/pub/media/catalog/product/cache/221571f1f430d40317d9c45922ff3e32/n/1/n1795gold_1.jpg"
                        zoomSrc="https://img2.ogaanindia.com/pub/media/catalog/product/cache/221571f1f430d40317d9c45922ff3e32/n/1/n1795gold_1.jpg"
                    />
                </div>
            </Col>
        </Row>
    );
};

export default ProductImg;
