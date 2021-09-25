import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        fetch('products.JSON')
        .then(res => res.json())
        .then(data => {
            setDisplayProducts(data);
            setProducts(data);})
    }, [])
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
    }
    const handleSearch = event => {
        const searchtext = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchtext.toLowerCase()));
        setDisplayProducts(matchedProduct);
        console.log(matchedProduct.length);
    }
    
    return (
        <>
        <div className="search">
        <form className="container py-3 d-flex">
                        <input onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="button" type="submit">Search</button>
        </form>
        </div>
        <div className="row">
            <div className="col-lg-1">
                
            </div>
            <div className="col-lg-8">
                {
                    displayProducts.map(product => <Product
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}>
                    </Product>)
                }
                

            </div>
            <div className="col-lg-3">
                <Cart cart={cart}></Cart>

            </div>
            
            
        </div>
        </>
    );
};

export default Shop;