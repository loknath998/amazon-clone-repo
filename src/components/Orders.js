import React from "react";
import { useStateValue } from "../StateProvider";
import OrderedProduct from "./OrderedProduct";
import "./Orders.css";

function Orders() {
    const [{ orders, user }, dispatch] = useStateValue();
    // console.log(orders);
    return (
        <div className="orders">
            <div className="orders__container">
                <div className="orders__title">Your Orders</div>
                <div className="Order__items">
                    {user ? (
                        orders?.length ? (
                            orders.map((item) => {
                                return (
                                    <OrderedProduct
                                        key={`${item.id}${item.time}`}
                                        item={item}
                                    />
                                );
                            })
                        ) : (
                            <h3>No order history</h3>
                        )
                    ) : (
                        <h3>Sign in to see order history</h3>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Orders;
