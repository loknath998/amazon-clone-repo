import React from "react";
import "./Product.css";

function ProductL() {
    return (
        <div className="product">
            <img
                className="product__image"
                src="https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UL320_.jpg"
                alt="wings of fire"
            />
            <div className="product__info">
                <p className="product__name">Wings of Fire</p>
                <div className="product__rating">⭐⭐⭐⭐⭐</div>
                <p className="product__price">
                    <strong>$29.99</strong>
                </p>
            </div>
            <button>Add to cart</button>
        </div>
    );
}
export default ProductL;
