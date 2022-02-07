import React from "react";
import "./Checkout.css";
// import Product from "./Product";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutItem from "./CheckoutItem";
import CurrencyFormat from "react-currency-format";
import Product from "./Product";
import { getCartTotalItems, getCartTotalPrice } from "../reducer";
// import FlipMove from "react-flip-move";
import SaveForLater from "./SaveForLater";

function Checkout() {
    // const [state, dispatch] = useStateValue();
    const [{ user, cart, save_for_later }, dispatch] = useStateValue();

    // console.log(state.cart);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkoutpage"
                />
                <h4 className="checkout__greeting">
                    {" "}
                    Hello, {user ? user.email : "Guest"}
                </h4>
                <div className="checkout__title">Shopping cart</div>
                {cart?.length ? (
                    <div className="checkout__titlePrice">Price</div>
                ) : (
                    <div className="checkout__titleEmpty">
                        Your cart is empty
                    </div>
                )}
                <div className="checkout__itemContainer">
                    {cart?.map((item, index) => {
                        return (
                            <CheckoutItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                qty={item.qty}
                                item={item}
                                // deleteItem={deleteItem}
                            />
                        );
                    })}
                    {/* <CheckoutItem />
                    <CheckoutItem /> */}
                    {cart?.length ? (
                        <div className="checkout__subtotal">
                            <CurrencyFormat
                                renderText={(value) => {
                                    return (
                                        <>
                                            <p>
                                                Subtotal (
                                                {getCartTotalItems(cart)}{" "}
                                                items):{" "}
                                                <span className="checkout__subtotalPrice">
                                                    {value}
                                                </span>
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
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                <div className="checkout__sponceredProducts">
                    <div>
                        <div className="checkout__savedForLater">
                            {save_for_later?.length
                                ? `Saved for later (${save_for_later.length} items)`
                                : "None item saved for later"}
                        </div>
                    </div>

                    {save_for_later?.map((item, index) => {
                        return (
                            <SaveForLater
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                id={item.id}
                            />
                        );
                    })}
                    {/* Sponsored Products related to items in your cart */}
                    {/* <Product
                        className="sponcered"
                        id={100}
                        title="Kore PVC 10-30 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories"
                        price={2328.0}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/81geHXZ6weL._AC_UL302_SR302,200_.jpg"
                    />
                    <Product
                        id={101}
                        title="boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance…"
                        price={1299}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41enxHWTgIL._AC_UL450_SR450,320_.jpg"
                        rating={5}
                    />
                    <Product
                        id={102}
                        rating={0}
                        title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
                        price={(29, 999)}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61TnX0PmqES._AC_UL450_SR450,320_.jpg"
                    /> */}
                </div>
            </div>
        </div>
    );
}
export default Checkout;
