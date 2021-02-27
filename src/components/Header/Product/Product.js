import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div>
            <div className="product">
                <div>
                    <img src={img} alt="" />

                </div>
                <div>
                    <h4 className="product-name">{name}</h4>
                    <br />
                    <p> <small>by:{seller}</small></p>
                    <br />
                    <p>${price}</p>
                    <p><small>Only {stock} left in stock. </small></p><br />
                    <button 
                    className="main-button" 
                    onClick={ ()=> props.handelAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Product;