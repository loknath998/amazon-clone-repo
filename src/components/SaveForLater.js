import React from "react";
import "./saveforlater.css";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

function SaveForLater({ image, title, rating, id, price }) {
    const [{ cart, save_for_later, orders }, dispatch] = useStateValue();

    function addToCart() {
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
        deleteSaveForLater(id);
    }

    function deleteSaveForLater(id) {
        dispatch({
            type: "SAVE_FOR_LATER_DELETE",
            id: id,
        });
    }

    return (
        <div className="saveforlater">
            <div className="saveforlater__container">
                <img src={image} alt="" className="saveforlater__image" />
                <div className="saveforlater__info">
                    <div className="saveforlater__title">{title}</div>
                    <div className="saveforlater__price">
                        <CurrencyFormat
                            renderText={(value) => {
                                return (
                                    <p>
                                        <span className="product__price">
                                            {value}
                                        </span>
                                    </p>
                                );
                            }}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            value={price}
                            displayType="text"
                            thousandSeparator={true}
                            prefix="₹"
                        />
                    </div>
                    <div className="saveforlater__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => {
                                return (
                                    <span
                                        key={i}
                                        className="saveforlater__stars"
                                    >
                                        ⭐
                                    </span>
                                );
                            })}
                    </div>
                    <button onClick={addToCart}>Add to cart</button>
                    <button onClick={() => deleteSaveForLater(id)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
export default SaveForLater;
