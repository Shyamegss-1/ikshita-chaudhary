import React from 'react';

const Helpus = () => {
    return (
        <div className="ogaan-helpus-block">
            <div className="left-block">
                <div className="text-block">
                    <h2 className="heading">MAY WE HELP YOU</h2>
                    <div className="list-block">
                        <ul>
                            <li className="active">
                                <a href="/contact-us">Contact Us</a>
                            </li>
                            <li className="">
                                <a href="/shipping-information">Shipping Information</a>
                            </li>
                            <li className="">
                                <a href="/terms-and-conditions-1">Terms & Conditions</a>
                            </li>
                            <li className="">
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-block">
                    <h2 className="heading">ABOUT US</h2>
                    <div className="list-block">
                        <ul>
                            <li className="">
                                <a href="/about-us">About OGAAN</a>
                            </li>
                            <li className="">
                                <a href="/our-stores">Our Stores</a>
                            </li>
                            <li className="">
                                <a href="/how-we-merchandise">How We Merchandise</a>
                            </li>
                            <li className="">
                                <a href="/press">Press</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Helpus;
