import React from 'react';
import { Link } from 'react-router-dom';
import { SHOP } from '../../../constants/route-path';

const Submenu = () => {
    return (
        <div className="header-sub-menu">
            <div className="menu-block">
                <div className="title">
                    <span>CATEGORIES</span>
                </div>
                <div className="sub-Menu">
                    <div className="menu-section clothing">
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
                    </div>
                    <div className="img-section clothing-img">
                        <Link href="https://www.ogaanmarket.com/clothing/dresses" className="img">
                            <img src="https://www.ogaanmarket.com/pub/media/catalog/tmp/category/Clothing-dropdown-Dresses_1.jpg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submenu;
