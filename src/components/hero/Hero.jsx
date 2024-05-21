import { Component } from "react";
import heroImg from "../../assets/images/heroImg.webp";
import "./Hero.scss";

export default class Hero extends Component {
    render() {
        return (
            <section id="hero">
                <div className="container hero">
                    <div className="hero__info">
                        <h1 className="hero__title">ONE PRICE</h1>
                        <p className="hero__desc">
                            For order from 3 to 10 items
                        </p>
                        <button className="hero__btn">Buy</button>
                    </div>
                    <div className="hero__img">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </section>
        );
    }
}
