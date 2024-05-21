import { Component } from "react";
// import { a } from "react-router-dom";
import "./Footer.scss";

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container footer">
                    <div className="footer__top">
                        <ul className="footer__top__list">
                            <h3>SHOPPING WITH US</h3>
                            <li className="footer__top__items">
                                <a href="#">Support</a>
                            </li>
                            <li className="footer__top__items">
                                <a href="#">Sales Calendar</a>
                            </li>
                            <li className="footer__top__items">
                                <a href="#">AliExpress Guide</a>
                            </li>
                        </ul>
                        <ul className="footer__top__list">
                            <h3>COLLABORATE WITH US</h3>
                            <li className="footer__top__items">
                                <a href="#">Sell on AliExpress</a>
                            </li>
                            <li className="footer__top__items">
                                <a href="#">Affiliate program</a>
                            </li>
                            <li className="footer__top__items">
                                <a href="#">Blog for seller</a>
                            </li>
                        </ul>
                        <ul className="footer__top__list">
                            <h3>ABOUT COMPANY</h3>
                            <li className="footer__top__items">
                                <a href="#">Press center</a>
                            </li>
                            <li className="footer__top__items">
                                <a href="#">AliTech</a>
                            </li>
                            <li className="footer__top__items">
                                <a href="#">Blog about company</a>
                            </li>
                        </ul>
                        <ul className="footer__top__list">
                            <h3>CONTACT US</h3>
                            <li className="footer__top__items">
                                <a href="#">VK</a>
                            </li>
                            <li className="footer__top__items">
                                <a href="#">TELEGRAM</a>
                            </li>
                            <li className="footer__top__items">
                                <a href="#">Dzen</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
