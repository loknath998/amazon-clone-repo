import React from "react";
import "./OrderedProduct.css";
import { useStateValue } from "../StateProvider";
import { BsBagCheck } from "react-icons/bs";

function OrderedProduct({ item }) {
    const { id, title, image, price, qty, date, time, rating, orderId } = item;

    const [{ user }, dispatch] = useStateValue();
    const Rdate = new Date(date);
    Rdate.setDate(Rdate.getDate() + 15);

    const addToCart = () => {
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
        <div className="ordered__product">
            <div className="ordered__productContainer">
                <div className="ordered__productDetails">
                    <div className="ordered__productDate">
                        ORDER PLACED
                        <br />
                        {date} {time}
                    </div>
                    <div className="ordered__productPrice">
                        TOTAL
                        <br />₹{price} x {qty} : ₹{price * qty}
                    </div>
                    <div className="ordered__productAddress">
                        SHIP TO
                        <br />
                        {user?.email}
                    </div>
                    <div className="ordered__productId">
                        ORDER # {orderId}
                        <br />
                        <button>view order details</button>
                        <button>Invoice</button>
                    </div>
                </div>
                <div className="ordered__productContents">
                    <img src={image} alt="prod" />
                    <div className="ordered__productOptions">
                        <div className="ordered__productTitle">{title}</div>
                        <div className="ordered__productReturn">
                            Return period - {date} to {Rdate.toDateString()}
                        </div>
                        {/* <p>
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <>⭐</>
                                ))}
                        </p> */}
                        <button onClick={addToCart}>
                            <BsBagCheck className="ordered__productBag" /> Buy
                            it again
                        </button>
                    </div>
                    <div className="ordered__productReview">
                        <button>Write a product review</button>
                    </div>
                </div>
                <div className="ordered__productBottom">Archive order</div>
            </div>
        </div>
    );
}
export default OrderedProduct;
