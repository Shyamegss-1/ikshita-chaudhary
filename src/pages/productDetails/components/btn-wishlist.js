import React from 'react';
import PropTypes from 'prop-types';

const BtnWishlist = ({ icon }) => {
    return <button className="btn btn-wishlist">{icon} wishlist</button>;
};

export default BtnWishlist;

BtnWishlist.propTypes = {
    icon: PropTypes.any.isRequired
};
