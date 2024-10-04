import React from 'react';
import Header from '../layout/headers/index';
import Footer from '../layout/footer/index';

const PublicRoute = ({ ...rest }) => {
  if (rest.title == 'home page') {
    return (
      <>
        <Header />
        {rest.element}
      </>
    );
  } else if (rest.title == 'cart page') {
    return <>{rest.element}</>;
  } else {
    return (
      <>
        <Header />
        {rest.element}
        <Footer />
      </>
    );
  }
};
export default PublicRoute;
