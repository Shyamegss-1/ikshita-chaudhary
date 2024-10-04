import React, { useState } from 'react';
import Slider from './slider';
import { Badge, BackTop } from 'antd';
import moduleName from '../../images/logo_dark.png';
import {
  WhatsAppOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
  SearchOutlined,
  MenuOutlined,
  RightOutlined,
  UserOutlined,
  InstagramOutlined,
  FacebookOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Popover } from 'antd';
import {
  ABOUT,
  COLLECTIONS,
  CONTACT_US,
  HOME,
  DASHBOARD,
  SHOP,
  WISHLIST,
  SALE,
  CART
} from '../../constants/route-path';
import Submenu from './components/submenu';
import { Row, Col, Drawer } from 'antd';
import Loginmodal from './components/login-modal';

const Index = () => {
  const [open, setOpen] = useState(false);
  const [loginModal, setLoginOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [search, setSearch] = useState(false);

  const navigate = useNavigate();

  const content = (
    <div className="dashboard-popover">
      <Link to={DASHBOARD}>
        <p>
          <i className="fa fa-user" aria-hidden="true"></i> My Account
        </p>
      </Link>
      <p>
        <LogoutOutlined className="fa fa-user" /> Logout
      </p>
    </div>
  );

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <Loginmodal setOpen={setLoginOpen} open={loginModal} />

      <header className="header-main" id="headerTop">
        <div className="head-slider">
          <Slider />
        </div>
        <div className="header-first">
          <div className="address-block">
            <p> Weekdays: 24 hours , Weekends: 8am-12am IST</p>
            <p>
              <WhatsAppOutlined />
              &nbsp;+91-8130109011 | saleshelp@ogaan.com
            </p>
          </div>
          <div className="middle-block">
            <div style={{ cursor: 'pointer' }} onClick={() => navigate(HOME)}>
              <img src={moduleName} />
            </div>
          </div>
          <div className="last-block">
            <ul>
              {' '}
              <li onClick={() => setLoginOpen(true)}>
                <Popover placement="bottomRight" content={content} trigger="hover">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </Popover>
              </li>
              <li>
                <Link to={WISHLIST}>
                  <Badge count={1} color={'black'}>
                    <HeartOutlined
                      style={{
                        fontSize: '20px',
                        marginLeft: '15px',
                        cursor: 'pointer'
                      }}
                    />
                  </Badge>
                </Link>
              </li>
              <li>
                <Link to={CART}>
                  <Badge count={1} color={'black'}>
                    <ShoppingCartOutlined style={{ fontSize: '20px', marginLeft: '15px' }} />
                  </Badge>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Input.Search allowClear placeholder="search" />
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation-items" style={{ zIndex: '111111' }}>
          <ul>
            <li>
              <Link to={COLLECTIONS}> collections</Link>{' '}
            </li>
            <li className="categori-menu">
              <Link to={'#'}>categories </Link>
              <Submenu />
            </li>
            <li>
              <Link to={ABOUT}> about the brand </Link>{' '}
            </li>
            <li>
              <Link to={SALE}> sale</Link>{' '}
            </li>
            <li>
              <Link to={SHOP}> shop</Link>{' '}
            </li>
            <li>
              <Link to={CONTACT_US}> contact us</Link>{' '}
            </li>
          </ul>
        </div>
      </header>

      {/* header 2 on scroll down */}
      <header id="headerBottom" className="hidden">
        <Row className="header-down" justify="center">
          <Col xl={5} lg={4} xxl={6}>
            {' '}
            <div style={{ cursor: 'pointer' }} className="log" onClick={() => navigate(HOME)}>
              <img src={moduleName} />
            </div>{' '}
          </Col>
          <Col xl={12} lg={14} xxl={10} className="middle-menu">
            <div className="items-list" style={{ zIndex: '111111' }}>
              <ul>
                <li>
                  <Link to={COLLECTIONS}> collections</Link>{' '}
                </li>
                <li className="categori-menu">
                  <Link to={'#'}>categories </Link>
                  <Submenu />
                </li>
                <li>
                  <Link to={ABOUT}> about the brand </Link>{' '}
                </li>
                <li>
                  <Link to={SALE}> sale</Link>{' '}
                </li>
                <li>
                  <Link to={SHOP}> shop</Link>{' '}
                </li>
                <li>
                  <Link to={CONTACT_US}> contact us</Link>{' '}
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={6} lg={4} xxl={7}>
            <ul className="last-block-menu">
              <li onClick={() => setLoginOpen(true)}>
                <Popover placement="bottomRight" content={content} trigger="hover">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </Popover>
              </li>
              <li>
                <Link to={WISHLIST}>
                  <Badge count={1} color={'black'}>
                    <HeartOutlined
                      style={{
                        fontSize: '22px',
                        marginLeft: '15px',
                        cursor: 'pointer'
                      }}
                    />
                  </Badge>
                </Link>
              </li>
              <li>
                <Link to={CART}>
                  <Badge count={1} color={'black'}>
                    <ShoppingCartOutlined style={{ fontSize: '22px', marginLeft: '15px' }} />
                  </Badge>
                </Link>
              </li>
              <li>
                <SearchOutlined
                  onClick={() => setSearch(true)}
                  style={{ fontSize: '22px', marginLeft: '15px' }}
                />
              </li>
            </ul>
          </Col>
        </Row>
        {search && (
          <Row justify="center" className="bottom-header-search">
            <Col span={22}>
              <Input.Search allowClear />
            </Col>
            <Col span={2}>
              <CloseOutlined
                onClick={() => setSearch(false)}
                style={{ padding: '0px 6px', fontSize: '29px', cursor: 'pointer' }}
              />
            </Col>
          </Row>
        )}
      </header>

      {/* header 3 */}
      <div className="moblil-menu">
        <Row>
          <div className="head-slider">
            <Slider />
          </div>
        </Row>
        <Row justify="space-between">
          <Col md={2} sm={3}>
            <MenuOutlined
              style={{ fontSize: '28px' }}
              onClick={showDrawer}
              className={'menu-hamburger'}
            />
          </Col>
          <Col md={16} style={{ position: 'relative' }}>
            <div onClick={() => navigate(HOME)} className={'mobile-logo'}></div>
          </Col>
          <Col md={6} sm={7} xs={9}>
            <ul className="cate">
              <li>
                <Link to={WISHLIST}>
                  <Badge count={1} color={'black'}>
                    <HeartOutlined
                      style={{
                        fontSize: '23px',
                        marginLeft: '15px',
                        cursor: 'pointer'
                      }}
                    />
                  </Badge>
                </Link>
              </li>
              <li>
                <Badge count={1} color={'black'}>
                  <ShoppingCartOutlined style={{ fontSize: '24px', marginLeft: '15px' }} />
                </Badge>
              </li>
              <li>
                <SearchOutlined style={{ fontSize: '24px', marginLeft: '15px' }} />
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Drawer placement="left" onClose={onClose} open={open}>
        <ul className="mobileSize-submenu">
          <li onClick={onClose}>
            <Link to={COLLECTIONS}> collections</Link>
          </li>
          <li onClick={showChildrenDrawer}>
            <Link to={'#'}>categories </Link>
            <RightOutlined style={{ marginLeft: '170px', fontSize: '17px' }} />
          </li>
          <li onClick={onClose}>
            <Link to={ABOUT}> about the brand </Link>
          </li>
          <li onClick={onClose}>
            <Link to={SALE}> sale</Link>
          </li>
          <li onClick={onClose}>
            <Link to={SHOP}> shop</Link>
          </li>
          <li onClick={onClose}>
            <Link to={CONTACT_US}> contact us</Link>
          </li>
        </ul>
        <div className="mobileMenu-subNavigation">
          <div className="dsadsad">
            <div className="Account">
              <Link to={DASHBOARD} onClick={onClose}>
                <div className="ass">
                  <p>Account</p>
                  <span>
                    <UserOutlined />
                  </span>
                </div>
              </Link>
            </div>
            <div className="logout">
              <div className="ass">
                <p>Logout</p>
                <span>
                  <LogoutOutlined />
                </span>
              </div>
            </div>
          </div>
          <div className="socialLinks">
            <a
              href="https://www.instagram.com/ikshitachoudhary/"
              rel="noreferrer"
              target={'_blank'}>
              <InstagramOutlined style={{ fontSize: '1.6rem', marginLeft: '24px' }} />
            </a>
            <a href="https://www.facebook.com/ikshitachoudhary" rel="noreferrer" target={'_blank'}>
              <FacebookOutlined style={{ fontSize: '1.6rem', marginLeft: '15px' }} />
            </a>
          </div>
        </div>
        <Drawer
          placement="left"
          width={320}
          closable={true}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}>
          <div className="menu-plot">
            <ul>
              <li>
                <Link to={SHOP}>Anarkali</Link>
              </li>
              <li>
                <Link to={SHOP}>Blouses</Link>
              </li>
              <li>
                <Link to={SHOP}>Co-ords</Link>
              </li>
              <li>
                <Link to={SHOP}>Dresses</Link>
              </li>
              <li>
                <Link to={SHOP}>Dupattas</Link>
              </li>
              <li>
                <Link to={SHOP}>Fusion</Link>
              </li>
              <li>
                <Link to={SHOP}>Jackets</Link>
              </li>
              <li>
                <Link to={SHOP}>Jumpsuits</Link>
              </li>
              <li>
                <Link to={SHOP}>Kaftans</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={SHOP}>Kurta Sets</Link>
              </li>
              <li>
                <Link to={SHOP}>Kurtas</Link>
              </li>
              <li>
                <Link to={SHOP}>Lehengas</Link>
              </li>
              <li>
                <Link to={SHOP}>Lounge Wear</Link>
              </li>
              <li>
                <Link to={SHOP}>Palazzos</Link>
              </li>
              <li>
                <Link to={SHOP}>Pants</Link>
              </li>
              <li>
                <Link to={SHOP}>Sarees</Link>
              </li>
              <li>
                <Link to={SHOP}>Shararas</Link>
              </li>
              <li>
                <Link to={SHOP}>Shirts</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={SHOP}>Skirts</Link>
              </li>
              <li>
                <Link to={SHOP}>Swimwear</Link>
              </li>
              <li>
                <Link to={SHOP}>Tops</Link>
              </li>
              <li>
                <Link to={SHOP}>Tunics</Link>
              </li>
              <li>
                <Link to={SHOP}>Unstitched Fabric Lengths</Link>
              </li>
            </ul>
          </div>
        </Drawer>
      </Drawer>
      <BackTop target={() => window} />
    </>
  );
};

export default Index;
