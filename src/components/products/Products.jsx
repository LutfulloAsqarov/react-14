import axios from "axios";
import { Component } from "react";
import "./Products.scss";

const API_URL = "https://dummyjson.com";

export default class Products extends Component {
    constructor() {
        super(),
            (this.state = {
                categories: null,
                data: null,
                offset: 1,
                categoryValue: "/products",
            });
    }

    componentDidMount() {
        axios
            .get(
                `${API_URL}${this.state.categoryValue}?limit=${
                    this.state.offset * 6
                }`
            )
            .then((res) => this.setState({ data: res.data.products }))
            .catch((err) => console.log(err));
        axios
            .get(`${API_URL}/products/categories`)
            .then((res) => this.setState({ categories: res.data }))
            .catch((err) => console.log(err));
    }

    componentDidUpdate(_, prevState) {
        if (
            this.state.offset !== prevState.offset ||
            this.state.categoryValue !== prevState.categoryValue
        ) {
            axios
                .get(
                    `${API_URL}${this.state.categoryValue}?limit=${
                        this.state.offset * 6
                    }`
                )
                .then((res) => this.setState({ data: res.data.products }))
                .catch((err) => console.log(err));
        }
    }

    render() {
        return (
            <section id="products">
                <div className="container products">
                    <ul className="products__categories">
                        <li>
                            <data
                                style={{
                                    background:
                                        this.state.categoryValue === `/products`
                                            ? "#e81711"
                                            : "#ddd",
                                    color:
                                        this.state.categoryValue === `/products`
                                            ? "#fff"
                                            : "#000",
                                }}
                                onClick={(e) =>
                                    this.setState({
                                        categoryValue: e.target.value,
                                    })
                                }
                                value="/products"
                            >
                                All
                            </data>
                        </li>
                        {this.state.categories?.map((el) => (
                            <li key={el}>
                                <data
                                    style={{
                                        background:
                                            this.state.categoryValue ===
                                            `/products/category/${el}`
                                                ? "#e81711"
                                                : "#ddd",
                                        color:
                                            this.state.categoryValue ===
                                            `/products/category/${el}`
                                                ? "#fff"
                                                : "#000",
                                    }}
                                    onClick={(e) =>
                                        this.setState({
                                            categoryValue: e.target.value,
                                        })
                                    }
                                    value={`/products/category/${el}`}
                                >
                                    {el}
                                </data>
                            </li>
                        ))}
                    </ul>
                    <div className="products__cards">
                        {this.state.data?.map((el) => (
                            <div key={el.id} className="products__card">
                                <div className="products__card__img">
                                    <img src={el.images[0]} alt="" />
                                </div>
                                <div className="products__card__info">
                                    <p>{el.description}</p>
                                    <h3>{el.price}.00 UZS</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="see-more__btn"
                        onClick={() =>
                            this.setState({
                                offset: this.state.offset + 1,
                            })
                        }
                    >
                        See more
                    </button>
                </div>
            </section>
        );
    }
}
