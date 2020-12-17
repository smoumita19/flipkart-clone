import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__section">
                <div className="about__section ">
                    <ul className="list-unstyled">
                        <li className="active">ABOUT</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Flipkart Stories</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className="help__section ">
                    <ul className="list-unstyled">
                        <li className="active">HELP</li>
                        <li>Payments</li>
                        <li>Shipping</li>
                        <li>Cancellation & Returns</li>
                        <li>FAQ</li>
                        <li>Report Infringement</li>
                    </ul>
                </div>
                <div className="policy__section ">
                    <ul className="list-unstyled">
                        <li className="active">POLICY</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Flipkart Stories</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className="social__section ">
                    <ul className="list-unstyled col-2">
                        <li className="active">SOCIAL</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                    </ul>
                </div>
                <div className="mail__section ">
                    <ul className="list-unstyled">
                        <li className="active">Mail Us:</li>
                        <li>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,</li>
                        <li>Bengaluru, 560103,</li>
                        <li>Karnataka, India</li>
                    </ul>
                </div>
                <div className="address__section ">
                    <ul className="list-unstyled">
                        <li className="active">Registered Office Address:</li>
                        <li>Flipkart Internet Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103, Karnataka, India</li>
                        <li>CIN : U51109KA2012PTC066107</li>
                        <li>Telephone: <a href="#">1800 202 9898</a> </li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}
