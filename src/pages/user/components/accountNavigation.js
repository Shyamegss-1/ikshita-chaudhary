import React from 'react';
import PropTypes from 'prop-types';
import {
    DASHBOARD,
    ACCOUNT_INFORMATION,
    USER_ORDER,
    STORE_CREDIT
} from '../../../constants/route-path';
import '../style.css';
import { NavLink } from 'react-router-dom';

const navigationItems = [
    { PageName: 'Account Dashboard', linkTo: DASHBOARD },
    { PageName: 'Account Information', linkTo: ACCOUNT_INFORMATION },
    { PageName: 'My Orders', linkTo: USER_ORDER },
    { PageName: 'Store Credit', linkTo: STORE_CREDIT }
];

const AccountNavigation = ({ active }) => {
    return (
        <div className="text-block">
            <h2 className="heading">MY ACCOUNT</h2>
            <div className="list-block">
                <ul>
                    {navigationItems.map((el) => {
                        return (
                            <li key={el.PageName} className={active == el.PageName ? 'isActive' : ''}>
                                <NavLink to={el.linkTo}>{el.PageName}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AccountNavigation;

AccountNavigation.propTypes = {
    active: PropTypes.string.isRequired
};
