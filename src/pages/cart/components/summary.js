import React from 'react';

const Summary = () => {
    return (
        <div>
            <div className="coupon-block">
                <div className="head">Coupons</div>
                <div className="coupon-content couop-cont">
                    <div className="coupon-data active">
                        <div className="img-pod">
                            <img src="https://img2.ogaanindia.com/pub/media/ogaanImages/couponIcon.svg" />
                        </div>
                        <div className="coupon-txt">Apply Coupon Code</div>
                    </div>

                    <div className="coupon-block">
                        <div className="title">Enter Coupon Code</div>

                        <div className="coupon-field">
                            <input type="text" className="coupon-number coup-txt-f" />
                            <div className="apply-btn coup-app-btn">Apply</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="price-container" id="price-details">
                <div className="head">
          price details <span>(2 Items)</span>
                </div>
                <div className="price-block">
                    <div className="price-row forbag">
                        <div className="text">Bag Total</div>
                        <div className="price p-total">Rs. 7,540</div>
                    </div>
                    <div className="price-row fordis">
                        <div className="text">Bag discount</div>
                        <div className="price dis-txt p-discount">-Rs. 0 </div>
                    </div>

                    <div className="price-row fortotal">
                        <div className="text">
              Order Total<span className="detail">view details</span>
                        </div>
                        <div className="price p-subtotal">Rs. 7,540 </div>
                    </div>
                    <div className="price-row">
                        <div className="text">Delivery Charges</div>
                        <div className="price dis-txt p-ship">Free </div>
                    </div>
                    <div className="price-row total">
                        <div className="text">Total</div>
                        <div className="price p-grandtotal">Rs. 7,540</div>
                    </div>
                </div>

                <div className="place-order-txt">
                    <div className="order-txt">PLACE ORDER</div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
