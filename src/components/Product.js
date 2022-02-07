import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

function Product({ id, title, price, rating, image }) {
    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        // dispatch the item into data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
                qty: 1,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <div>
                    <p className="product__title">{title}</p>
                </div>
                <CurrencyFormat
                    renderText={(value) => {
                        return (
                            <p className="product__price">
                                <span>{value}</span>
                            </p>
                        );
                    }}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="₹"
                    value={price}
                />

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => {
                            return <p key={i}>⭐</p>;
                        })}
                </div>
            </div>
            <img
                // src="https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UL320_.jpg"
                src={image}
                alt="product image"
            />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}
export default Product;
