import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shippingCost = 0;


    for(const product of cart){
        total = parseFloat((total + product.price)).toFixed(2);
    }

    for(const product of cart){
        shippingCost = parseFloat((shippingCost + product.shipping)).toFixed(2);
    }

    const totalWithoutTax = parseFloat((total + shippingCost)).toFixed(2);
    const tax = parseFloat(totalWithoutTax * 0.1).toFixed(2);

    const totalWithTax = parseFloat((totalWithoutTax + tax)).toFixed(2);

    return (
        <div className="cart mt-4">
            <h2>Order History</h2>
            <br />
            <br />
            <h4>Ordered Items: {props.cart.length}</h4>
            <br />
            <p>Total Price: ${total}</p>
            <p>Shipping:${shippingCost} </p>
            <p>Total Before tax: ${totalWithoutTax}</p>
            <small>Tax: ${tax}</small>
            <h4>Total: {totalWithTax}</h4>

            
        </div>
    );
};

export default Cart;