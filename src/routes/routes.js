import React from 'react';
import {
  HOME,
  CONTACT_US,
  ABOUT,
  COLLECTIONS,
  PRODUCT_DETAILS,
  DASHBOARD,
  ACCOUNT_INFORMATION,
  USER_ORDER,
  STORE_CREDIT,
  BILLING_ADDRESS,
  SHIPPING_ADDRESS,
  SHOP,
  WISHLIST,
  SALE,
  CART,
  SIGN_UP
} from '../constants/route-path';
const Home = React.lazy(() => import('../pages/home/index'));
const Contact = React.lazy(() => import('../pages/contact/index'));
const About = React.lazy(() => import('../pages/about/index'));
const Collection = React.lazy(() => import('../pages/collection/index'));
const ProductDetails = React.lazy(() => import('../pages/productDetails/index'));
const UserAccount = React.lazy(() => import('../pages/user/index'));
const AccountInfo = React.lazy(() => import('../pages/user/components/accountInfo'));
const UserOrder = React.lazy(() => import('../pages/user/components/userOrderdetails'));
const StoreCredit = React.lazy(() => import('../pages/user/components/storeCredit'));
const UserBillingAddress = React.lazy(() => import('../pages/user/components/primaryAddress'));
const UserShippingAddress = React.lazy(() => import('../pages/user/components/shippingAddress'));
const Shop = React.lazy(() => import('../pages/shop/index'));
const Wishlist = React.lazy(() => import('../pages/wishlist/index'));
const Sale = React.lazy(() => import('../pages/sale/index'));
const Cart = React.lazy(() => import('../pages/cart/index'));
const SignUp = React.lazy(() => import('../pages/signup/index'));
const NoPageFound = React.lazy(() => import('../routes/nowhere'));

const configureRoutes = () => {
  const routes = [
    {
      element: <NoPageFound />,
      exact: true,
      path: '*',
      title: '404 Not Found',
      type: 'public'
    },
    {
      element: <Home />,
      exact: true,
      path: HOME,
      title: 'home page',
      type: 'public'
    },
    {
      element: <Contact />,
      exact: true,
      path: CONTACT_US,
      title: 'contact page',
      type: 'public'
    },
    {
      element: <About />,
      exact: true,
      path: ABOUT,
      title: 'about page',
      type: 'public'
    },
    {
      element: <Collection />,
      exact: true,
      path: COLLECTIONS,
      title: 'collections page',
      type: 'public'
    },
    {
      element: <ProductDetails />,
      exact: true,
      path: PRODUCT_DETAILS,
      title: 'product detail page',
      type: 'public'
    },
    {
      element: <UserAccount />,
      exact: true,
      path: DASHBOARD,
      title: 'user account page',
      type: 'public'
    },
    {
      element: <AccountInfo />,
      exact: true,
      path: ACCOUNT_INFORMATION,
      title: 'user account information page',
      type: 'public'
    },
    {
      element: <UserOrder />,
      exact: true,
      path: USER_ORDER,
      title: 'user order information page',
      type: 'public'
    },
    {
      element: <StoreCredit />,
      exact: true,
      path: STORE_CREDIT,
      title: 'store credit information page',
      type: 'public'
    },
    {
      element: <UserBillingAddress />,
      exact: true,
      path: BILLING_ADDRESS,
      title: 'billing information page',
      type: 'public'
    },
    {
      element: <UserShippingAddress />,
      exact: true,
      path: SHIPPING_ADDRESS,
      title: 'shipping information page',
      type: 'public'
    },
    {
      element: <Shop />,
      exact: true,
      path: SHOP,
      title: 'ssop page',
      type: 'public'
    },
    {
      element: <Wishlist />,
      exact: true,
      path: WISHLIST,
      title: 'wishlist page',
      type: 'public'
    },
    {
      element: <Sale />,
      exact: true,
      path: SALE,
      title: 'sale page',
      type: 'public'
    },
    {
      element: <Cart />,
      exact: true,
      path: CART,
      title: 'cart page',
      type: 'public'
    },
    {
      element: <SignUp />,
      exact: true,
      path: SIGN_UP,
      title: 'sign up page',
      type: 'public'
    }
  ];

  return routes;
};

export default configureRoutes;
