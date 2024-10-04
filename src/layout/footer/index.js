import { FacebookFilled, InstagramFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import moduleName from '../../images/logo_dark.png';
import { HOME, CONTACT_US } from '../../constants/route-path';

const Index = () => {
  return (
    <footer>
      <div className="content-block">
        <div className="domain-block">
          <Link to={HOME} className="market-logo">
            <img src={moduleName} />
          </Link>
          <div className="assistance">
            <div className="title">For Assistance</div>
            <div className="phone">
              <div className="icon">
                <PhoneFilled />
              </div>

              <span>
                <a href="tel:+91-1141650033">+91-1141650033</a>
              </span>
            </div>
            <div className="email">
              <div className="icon">
                <MailFilled />
              </div>

              <span>
                <a href="mailto:Info@Ikshitachoudhary.Com">Info@Ikshitachoudhary.Com</a>
              </span>
            </div>
            <div className="cards">
              <div>
                <a
                  href="https://www.facebook.com/ikshitachoudhary"
                  target="_blank"
                  rel="noreferrer">
                  <FacebookFilled style={{ fontSize: '28px' }} />
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/ikshitachoudhary/"
                  target="_blank"
                  rel="noreferrer">
                  <InstagramFilled style={{ fontSize: '28px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-block">
          <div className="section">
            <div className="menu">
              <div className="title">MAY WE HELP YOU?</div>
              <ul>
                <li>
                  <Link to={CONTACT_US}>Contact Us</Link>
                </li>
                <li>
                  <Link to={'#'}>Shipping Information</Link>
                </li>
                <li>
                  <Link to={'#'}>Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to={'#'}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="cards">
              <div className="title">WE ACCEPT</div>
              <div className="img">
                <img src="https://img2.ogaanindia.com/pub/media/ogaanImages/acceptedcard.png" />
              </div>
              <div className="img">
                <img src="https://img2.ogaanindia.com/pub/media/ogaanImages/paypal.png" />
              </div>
              <div className="text">Internet Banking</div>
            </div>
          </div>
        </div>

        <div className="menu-block">
          <div className="section">
            <div className="menu">
              <div className="title">ABOUT US</div>
              <ul>
                <li>
                  <Link to={'#'}>About Ogaan</Link>
                </li>
                <li>
                  <Link to={'#'}>How We Merchandise</Link>
                </li>
                <li>
                  <Link to={'#'}>Gift Card</Link>
                </li>
                <li>
                  <Link to={'#'}>Press</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subscribe-block">
          <div className="title"></div>

          <div className="subscribe-form">
            <div className="form">
              <div className="input">
                <input
                  type="text"
                  id="news-email"
                  name="news-email"
                  placeholder="Enter your email"
                />
              </div>
              <button id="news-subscriber">SIGN ME UP!</button>
            </div>
            <span className="news-error"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
