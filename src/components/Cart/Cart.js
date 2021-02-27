import React from 'react';

const Cart = (props) => {
    const cart= props.cart
    const price= cart.reduce((total, prd) => total+ prd.price, 0);

    // let price=0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     price= price+ product.price;
        
    // }

    let shipping=0;

    if(price>35){
        shipping=0;
    }

    else if(price>15){
     shipping=10;
    }
    
    else if(price>0){
        shipping=18;
    }

    const vat= Math.round(price/10);
    const grandTotal= Math.round(price + shipping+vat);
    return (
        <div>
            <div>
                <h2>Order Summary</h2>
                <p> Item Ordered: {cart.length}</p>
                <p>Total Price: ${price}</p>
                <p> Vat: ${vat}</p>
                <p><small>Shipping Cost: ${shipping}</small></p>
                <p>Total Price: ${grandTotal}</p>

            </div>
        </div>
    );
};

export default Cart;