import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faShoppingCart} />




const Product = (props) => {
    // console.log(props);
    const {name,img,seller,stock,price,shipping} =props.product;
    return (
        <div className="d-flex product mt-3">
            <div className="product-img mx-3 p-3">
                <img src={img} alt="" />

            </div>
            <div className="product-details ms-2">
                <h3 className="product-header">{name} </h3>
                <p>Seller Name: {seller}</p>
                <h4>Price: ${price}</h4>
                <p>Shipping: ${shipping}</p>
                <p><small>{stock} products left in stock</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="product-button">{element} Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;