import React from "react";
import "./CheckoutItem.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function CheckoutItem({ image, title, price, id, qty, item }) {
    const [{ cart, user }, dispatch] = useStateValue();

    function deleteItem(id) {
        dispatch({
            type: "DELETE_FROM_CART",
            id: id,
        });
    }
    function decreaseQty() {
        if (qty == 1) {
            dispatch({
                type: "DELETE_FROM_CART",
                id: id,
            });
        } else {
            dispatch({
                type: "DECREASE_QUANTITY",
                id: id,
            });
        }
    }
    function increaseQty() {
        dispatch({ type: "ADD_TO_CART", item: { id: id } });
    }

    function saveForLater() {
        dispatch({ type: "SAVE_FOR_LATER", item: item });
        dispatch({ type: "DELETE_FROM_CART", id: id });
    }

    return (
        <div className="checkout__item">
            <img className="checkout__itemImage" src={image} alt="item" />

            <div className="checkout__itemInfo">
                <div className="checkout__itemTitle">{title}</div>
                <p className="checkout__itemStock">In stock</p>
                <p>Eligible for FREE shipping</p>
                <div className="checkout__itemGift">
                    <input type="checkbox" /> This will be a gift
                </div>
                <div className="checkout__itemOptions">
                    <button
                        className="checkout__itemQtyUpdate checkout__itemOption"
                        onClick={increaseQty}
                    >
                        +
                    </button>
                    {qty}
                    <button
                        className="checkout__itemQtyUpdate checkout__itemOption"
                        onClick={decreaseQty}
                    >
                        -
                    </button>
                    |
                    <button
                        className="checkout__itemOption checkout__itemOptionWorking"
                        onClick={() => deleteItem(id)}
                    >
                        Delete
                    </button>
                    |
                    <button
                        className="checkout__itemOption checkout__itemOptionWorking"
                        onClick={saveForLater}
                    >
                        Save for later
                    </button>
                    |
                    <button className="checkout__itemOption">
                        See more like this
                    </button>
                </div>
            </div>
            <div className="checkout__itemPrice">
                <CurrencyFormat
                    renderText={(value) => {
                        return (
                            <p>
                                <strong>{value}</strong>
                            </p>
                        );
                    }}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    displayType="text"
                    value={price}
                    thousandSeparator={true}
                    prefix="₹"
                />

                {/* <strong>₹{price}</strong> */}
            </div>
        </div>
    );
}
export default CheckoutItem;
