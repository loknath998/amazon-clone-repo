import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getCartTotalPrice, getCartTotalItems } from "../reducer";
import { useNavigate } from "react-router-dom";
// import { db } from "../firebase";
import { app } from "../firebase";
import {
    doc,
    addDoc,
    setDoc,
    getFirestore,
    collection,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";

function Subtotal() {
    const [{ cart, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const onCheckOut = async () => {
        // console.log("going to payment", user);
        if (user) {
            const total = getCartTotalPrice(cart);

            if (getCartTotalItems(cart) !== 0) {
                navigate("/payment");
            } else {
                alert("Add item to cart first");
            }
        } else {
            alert("You need to sign in before Checkout");
        }
    };
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>
                                Subtotal ({getCartTotalItems(cart)} items):{" "}
                                <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a
                                gift
                            </small>
                        </>
                    );
                }}
                decimalScale={2}
                fixedDecimalScale={true}
                value={getCartTotalPrice(cart)}
                displayType="text"
                thousandSeparator={true}
                prefix="₹"
            />
            <button onClick={() => onCheckOut()}>Proceed to Buy</button>
        </div>
    );
}
export default Subtotal;
