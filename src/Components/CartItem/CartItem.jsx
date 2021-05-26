import React from 'react';

import './CartItem.scss';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
            <div className="cart-item-static">
                <div className="cart-item-image">
                    <img src={process.env.PUBLIC_URL + '/img/' + item.image} alt={item.title} />
                </div>
                <div className="cart-item-text">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-display">{item.displaySize}-inch display</div>
                </div>
            </div>
            <div className="cart-product-count">
                <input type="number" name="productNumber" defaultValue="1" />
            </div>
            <div className="cart-item-actions">
                <div className="cart-item-price">${item.price}</div>
                <div className="cart-product-delete" onClick={removeFromCart}>
                    Remove
                </div>
            </div>
        </div>
    );
}

export default CartItem;