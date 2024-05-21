import { Component } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Hero />
                <Products />
                <Footer />
            </div>
        );
    }
}
