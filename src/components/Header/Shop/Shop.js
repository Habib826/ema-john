import React, { useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../../fakeData';
import './shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const[products, setProducts]= useState(first10);
    const[cart, setCart]= useState([])
    const handelAddProduct= (product)=>{
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
      }

    return (
        <div className="shop-container">
           <div className="products-container">
           
            {
                products.map(product=> <Product handelAddProduct={handelAddProduct} product={product}></Product>)
            }
        
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;