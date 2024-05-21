import { Component } from "react";
import bookImg from "../../assets/images/book.svg";
import orders from "../../assets/images/orders.svg";
import cart from "../../assets/images/cart.svg";
import signIn from "../../assets/images/signIn.svg";
import logo from "../../assets/images/logo.png";
import "./Header.scss";

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container header">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header__right">
                        <div className="header__btn">
                            <img src={bookImg} alt="img" />
                            <p>Catalog</p>
                        </div>
                        <div className="header__input">
                            <input type="text" placeholder="search..." />
                            <button>Find</button>
                        </div>
                        <div className="header__btn">
                            <img src={orders} alt="orders" />
                            <p>Orders</p>
                        </div>
                        <div className="header__btn">
                            <img src={cart} alt="cart" />
                            <p>Cart</p>
                        </div>
                        <div className="header__btn">
                            <img src={signIn} alt="sign in" />
                            <p>Sign In</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
