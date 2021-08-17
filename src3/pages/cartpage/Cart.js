import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
    return (
        <div className="cart">
            <div className="cart__container">
                <div className="cart__bag">
                    <div className="shipping__detail">
                        <p>Free Shipping for Members.</p>
                        <span>Become a Nike Member for fast and free shipping. <Link>Join us</Link> or <Link>Sign-in</Link></span>
                    </div>
                    <h3>Bag</h3>
                    <p>There are no items in your bag.</p>
                </div>
                <div className="cart__summary">
                    <h3>Summary</h3>
                </div>
            </div>
        </div>
    )
}

export default Cart
