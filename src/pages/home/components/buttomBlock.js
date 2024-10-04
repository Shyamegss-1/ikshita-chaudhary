import React from 'react';

const ButtomBlock = () => {
    return (
        <div className="bottom-block">
            <div className="head">
                <div className="title">Be the First to Know</div>
                <div className="sub-title">
          Sign up for our newsletter and stay updated on the latest trends, sales and pop-ups
                </div>
            </div>
            <div className="sign-in-block">
                <label>
                    <input
                        type="text"
                        name=""
                        className="sign-up"
                        placeholder="Enter Your Email"
                        id="news-email"
                    />
                    <div className="btn" id="news-subscriber">
            SIGN ME UP
                    </div>
                    <span className="error-msg news-error"></span>
                </label>
            </div>
            <div className="image-block">
                <div className="img">
                    <img src="https://www.ogaanmarket.com/pub/media/ogaanImages/market/flower-leaf.svg" />
                </div>
            </div>
            <div className="contact-us-block">
                <div className="contact-slot">
                    <div className="col">
                        <a href="#" className="action-btn">
              ABOUT
                        </a>
                        <a href="#" className="action-btn">
              GIFT CARD
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="action-btn">
              SHIPPING
                        </a>
                        <a href="#" className="action-btn">
              PRIVACY POLICY
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="action-btn">
              RETURNS
                        </a>
                        <a href="#" className="action-btn">
              CONTACT
                        </a>
                    </div>
                </div>
            </div>
            <div className="social-media-block">
                <a href="#" className="social-icon card-fb">
                    <div className="icon-pod fb">
                        <img src="https://www.ogaanmarket.com/pub/media/ogaanImages/market/mrkt-fb.svg" />
                    </div>
                </a>
                <a href="#" className="social-icon card-insta">
                    <div className="icon-pod insta">
                        <img src="https://www.ogaanmarket.com/pub/media/ogaanImages/market/mrkt-insta.svg" />
                    </div>
                </a>
                <a href="#" className="social-icon">
                    <div className="icon-pod envelop">
                        <img src="https://www.ogaanmarket.com/pub/media/ogaanImages/market/mrkt-envelop.svg" />
                    </div>
                </a>
                <a href="#" className="social-icon">
                    <div className="icon-pod whatsapp">
                        <img src="https://www.ogaanmarket.com/pub/media/ogaanImages/market/mrkt-whatsapp.svg" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ButtomBlock;
