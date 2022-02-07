import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { getCartTotalItems, getCartTotalPrice } from "../reducer";
import CurrencyFormat from "react-currency-format";
import CheckoutItem from "./CheckoutItem";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
    const [{ cart, user, address }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [addressInput, setAddress] = useState({
        line1: "",
        line2: "",
        line3: "",
    });
    function handleChange(e) {
        setAddress({
            ...addressInput,
            [e.target.name]: e.target.value,
        });
    }

    function saveAddress() {
        // console.log(addressInput);
        if (
            addressInput.line1?.trim() == "" ||
            addressInput.line2?.trim() == ""
        ) {
            // if(!address)
            alert("Please input address in Line 1 and Line 2");
            // dispatch({
            //     type: "ADD_ADDRESS",
            //     address: null,
            // });
        } else {
            dispatch({
                type: "ADD_ADDRESS",
                address: addressInput,
            });
            setAddress({
                line1: "",
                line2: "",
                line3: "",
            });
        }
    }

    function handlePayment() {
        // console.log(!address);
        // console.log(address?.line1);
        if (address && address?.line1) {
            // alert("go in go");
            if (cart?.length >= 1) {
                const orderId = Math.floor(Math.random() * 1000000000 + 1);

                dispatch({ type: "ADD_TO_ORDERS", orderId: orderId });
                navigate("/orders");
            } else {
                alert("Your cart is empty");
            }
        } else {
            alert("First add Address");
        }
    }

    return (
        <div className="payment">
            <div className="payment__container">
                {/* payment Page */}
                <h1>
                    <Link to="/checkout">Checkout ( {cart?.length} items)</Link>
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Select a delivery address</h3>
                    </div>
                    <div className="payment__address">
                        {address ? (
                            <>
                                <div className="payment__addressStatic">
                                    <h4>Saved address</h4>
                                    <p className="payment__addressLineStatic">
                                        {address.line1}
                                    </p>
                                    <p className="payment__addressLineStatic">
                                        {address.line2}
                                    </p>
                                    <p className="payment__addressLineStatic">
                                        {address.line3}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <p>you have not saved address</p>
                        )}
                    </div>
                    <div className="payment__address">
                        <div>
                            <h4>Add new address</h4>
                            <div className="payment__addressLine">
                                <p>Line 1</p>
                                <input
                                    type="text"
                                    value={addressInput.line1}
                                    onChange={handleChange}
                                    name="line1"
                                />
                            </div>
                            <div className="payment__addressLine">
                                <p>Line 2</p>
                                <input
                                    type="text"
                                    value={addressInput.line2}
                                    onChange={handleChange}
                                    name="line2"
                                />
                            </div>
                            <div className="payment__addressLine">
                                <p>Line 3</p>
                                <input
                                    type="text"
                                    value={addressInput.line3}
                                    onChange={handleChange}
                                    name="line3"
                                />
                            </div>
                        </div>
                        <button onClick={saveAddress}>Save address</button>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items</h3>
                    </div>
                    <div className="payment__reviewItems">
                        {cart?.map((item) => {
                            return (
                                <CheckoutItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    qty={item.qty}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__method">
                        <div className="payment__methodCardDetails">
                            <input
                                type="number"
                                className="payment__cardNo"
                                placeholder="Card Number"
                            />
                            <div>
                                <input
                                    type="text"
                                    className="payment__cardCvv"
                                    placeholder="Valid upto"
                                />{" "}
                                <input
                                    type="text"
                                    className="payment__cardCvv"
                                    placeholder="CVV"
                                />
                            </div>
                        </div>
                        <div className="payment__methodPay">
                            <CurrencyFormat
                                renderText={(value) => {
                                    return (
                                        <>
                                            <p>
                                                Total amount to pay (
                                                {getCartTotalItems(cart)}{" "}
                                                items): <strong>{value}</strong>
                                            </p>
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
                            <button onClick={handlePayment}>Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
