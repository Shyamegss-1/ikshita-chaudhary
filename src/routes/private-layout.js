import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../layout/headers/index';
import Footer from '../layout/footer/index';
import { useSelector } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
const PrivateRoute = ({ ...rest }) => {
    const { token } = useSelector((e) => e.userLogin);
    //   const getToken = useSelector((state) => state.userToken.authenticate[0]);
    if (token) {
        return (
            <>
                <Header />
                {rest.element}
                <Footer />
            </>
        );
    } else {
        return <Navigate to="/Login" />;
    }
};

export default PrivateRoute;
